# Project Overview

## Project Name

Tacato Truck Online Ordering

## Project Description

The Tacato Truck is a food truck specializing in Taco that partners with the ASPCA for cat fostering and adoption. Tacato Truck Online Ordering aims to allow users to browse the delcious offerings of the Tacato Truck. The user can see detailed information about each menu item, edit current menu offerings. Users are able to create accounts that allow them to create their own specialized tacos.

## Wireframes

![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631296007/Tactato%20Truck/Screen_Shot_2021-09-10_at_1.45.26_PM_ym61uv.png)
![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631296006/Tactato%20Truck/Screen_Shot_2021-09-10_at_1.45.35_PM_qwlmrr.png)
![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631296006/Tactato%20Truck/Screen_Shot_2021-09-10_at_1.45.46_PM_hofodv.png)
![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631296006/Tactato%20Truck/Screen_Shot_2021-09-10_at_1.45.53_PM_g5cyzw.png)
![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631296005/Tactato%20Truck/Screen_Shot_2021-09-10_at_1.46.02_PM_qgoob6.png)
![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631296010/Tactato%20Truck/Screen_Shot_2021-09-10_at_1.46.20_PM_gk4dy5.png)

https://www.figma.com/file/pyFU0tZHVGiFijFj649PbN/TacoTruck?node-id=0%3A1

## Component Hierarchy

![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631296152/Tactato%20Truck/Screen_Shot_2021-09-10_at_1.49.06_PM_rf7c83.png)

https://whimsical.com/tacato-truck-5wSRQ6ppqPyDmdiE2YpkJj

## Schema

```
const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)

const MenuItem = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    price: { type: String, required: true },
    ingredients: { type: String, required: true }
  },
  { timestamps: true }
)
```

#### MVP 

- View entire available menu
- See detailed inforamtion about specific items
- User functionality (user sign in/sign up/sign out/validation)
- Create and update menu items
- Detailed home page including carousel of randomly selected menu items and mission statement
- Functional radio buttons to denote ingredients on menu item details
- Successful deployment

#### PostMVP  

- Add a sidebar style shopping cart that is user specific
- Search and Sort algorithms for menu items
- User favorite items
- User star rating reviews

## Team Expectations

https://docs.google.com/document/d/1jeL7CPtsA_dZJ0WBXNk0OaMPOFskaxDr5GKOG3HM6ag/edit

## Change Log

|  Day | Changes
|---|---|
|August 10| Project Approval
