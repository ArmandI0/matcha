# Sequelize Complete Guide

## Table of Contents
1. [Installation & Setup](#installation--setup)
2. [Basic Configuration](#basic-configuration)
3. [Models & Types](#models--types)
4. [Relations](#relations)
5. [Queries](#queries)
6. [Validations & Constraints](#validations--constraints)
7. [Complete Examples](#complete-examples)

## Installation & Setup

```bash
# Install Sequelize
npm install sequelize pg pg-hstore

# For development
npm install -D nodemon
```

## Basic Configuration

```javascript
// database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432,
    logging: console.log // Set to false in production
});

// Test connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection successful');
    } catch (error) {
        console.error('Unable to connect:', error);
    }
}

module.exports = sequelize;
```

Example `.env` file:
```env
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=5432
```

## Models & Types

### Available Data Types
```javascript
const { DataTypes } = require('sequelize');

// String Types
DataTypes.STRING         // VARCHAR(255)
DataTypes.STRING(1234)   // VARCHAR(1234)
DataTypes.TEXT           // TEXT
DataTypes.CHAR          // CHAR(1)
DataTypes.CHAR(10)      // CHAR(10)

// Numeric Types
DataTypes.INTEGER       // INTEGER
DataTypes.BIGINT        // BIGINT
DataTypes.FLOAT         // FLOAT
DataTypes.DOUBLE        // DOUBLE
DataTypes.DECIMAL(10,2) // DECIMAL(10,2)

// Date Types
DataTypes.DATE         // DATETIME
DataTypes.DATEONLY     // DATE
DataTypes.TIME         // TIME

// Others
DataTypes.BOOLEAN      // TINYINT(1)
DataTypes.JSON         // JSON column
DataTypes.UUID         // UUID
```

### Basic Model Definition
```javascript
// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'users',
    timestamps: true // Creates createdAt and updatedAt
});

module.exports = User;
```

## Relations

### One-to-One
```javascript
// User has one Profile
User.hasOne(Profile);
Profile.belongsTo(User);

// With options
User.hasOne(Profile, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
```

### One-to-Many
```javascript
// User has many Posts
User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Post.belongsTo(User);
```

### Many-to-Many
```javascript
// Users can have many Roles and Roles can have many Users
User.belongsToMany(Role, { through: 'UserRoles' });
Role.belongsToMany(User, { through: 'UserRoles' });

// With custom junction table
const UserRole = sequelize.define('UserRole', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    },
    assignedBy: DataTypes.STRING
});
```

## Queries

### Basic CRUD Operations
```javascript
// Create
const user = await User.create({
    username: 'john',
    email: 'john@example.com'
});

// Read
const user = await User.findByPk(1);
const users = await User.findAll();
const john = await User.findOne({
    where: { username: 'john' }
});

// Update
await User.update({ isActive: false }, {
    where: { id: 1 }
});

// Delete
await User.destroy({
    where: { id: 1 }
});
```

### Advanced Queries
```javascript
// Find with conditions
const users = await User.findAll({
    where: {
        isActive: true,
        age: {
            [Op.gte]: 18 // Greater than or equal
        }
    },
    order: [
        ['createdAt', 'DESC']
    ],
    limit: 10,
    offset: 0
});

// Include relations
const userWithPosts = await User.findOne({
    where: { id: 1 },
    include: [{
        model: Post,
        where: { isPublished: true }
    }]
});

// Count
const count = await User.count({
    where: { isActive: true }
});
```

## Validations & Constraints

```javascript
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        validate: {
            len: [4, 20],        // Length between 4 and 20
            isAlphanumeric: true // Only letters and numbers
        }
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0,
            max: 120,
            isInt: true
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
            customValidator(value) {
                if (value === 'test@test.com') {
                    throw new Error('This email is forbidden');
                }
            }
        }
    }
});
```

## Complete Examples

### Full User Management System
```javascript
// models/User.js
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 20]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

// controllers/userController.js
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);

module.exports = router;

// index.js
const express = require('express');
const sequelize = require('./database');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
});
```

### Error Handling
```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    if (err instanceof sequelize.ValidationError) {
        return res.status(400).json({
            error: err.errors.map(e => ({
                field: e.path,
                message: e.message
            }))
        });
    }
    
    res.status(500).json({
        error: 'Internal server error'
    });
};

// Use in index.js
app.use(errorHandler);
```

This guide covers the basics of Sequelize. For more detailed information, check the [official Sequelize documentation](https://sequelize.org/).