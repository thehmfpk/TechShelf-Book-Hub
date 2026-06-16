# TechShelf 📚 

[![Node.js Version](https://img.shields.io/badge/node_js-%3E%3D_18.0.0-green.svg)](https://nodejs.org/)
[![Framework](https://img.shields.io/badge/framework-Express_4.x-blue.svg)](https://expressjs.com/)
[![Database](https://img.shields.io/badge/database-MongoDB_v6.x--v8.x-brightgreen.svg)](https://www.mongodb.com/)
[![Architecture](https://img.shields.io/badge/architecture-MVC--Pattern-orange.svg)](#)
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](#)

A high-performance, responsive full-stack bookstore repository engineered using the strict **MVC (Model-View-Controller)** architectural pattern. TechShelf bridges a dynamic frontend client interface with a robust, asynchronous transaction pipeline, enabling users to seamlessly discover technical books, submit custom requests, and place orders directly into a localized cloud database.

---

## 📌 Executive Overview (Non-Technical)

### What is TechShelf?
TechShelf is a digital catalog platform built to streamline how readers discover and acquire educational and technical literature. Instead of jumping between disconnected resources, TechShelf provides a unified space where users can read curated descriptions, request custom or out-of-stock titles, and commit formal purchase receipts through a streamlined digital checkout.

### Core Problems Solved
* **Dynamic Inventory Visibility:** Eliminates stale, static HTML catalogs by serving up real-time inventory assets straight from a central source.
* **Streamlined Inquiries:** Simplifies customer outreach by collecting, parsing, and storing communication logs automatically.
* **Frictionless Checking-Out:** Provides a multi-layered ordering terminal that registers secure order requests without disrupting the user's browsing flow.

---

## 🛠️ Technical Ecosystem & Stack

### Frontend Rendering Engine
* **EJS (Embedded JavaScript Templates):** Utilized as the server-side UI template compilation language to build fluid data bindings.
* **Component-Based Layouts (Partials):** Global user interface assets (headers, navigation blocks, footers) are broken down into reusable component modules to prevent redundant view code.
* **Asynchronous Client JS:** Implements custom browser-level JavaScript to track, capture, and post form data objects asynchronously via modern API fetch calls.

### Backend Application Server
* **Node.js runtime:** Serves as the event-driven, non-blocking execution engine driving the core platform ecosystem.
* **Express.js Framework:** Orchestrates the core application instance layer, handling request/response round-trips, static resource serving, and pipeline middleware check-gates.

### Database Architecture & Validation Layer
* **MongoDB (NoSQL):** Hosted natively as a high-throughput, horizontally scalable document store utilizing JSON-like binary entries (`BSON`).
* **Mongoose ODM:** Translates Node.js object expressions directly into strongly typed database constraints. Outfitted with automatic system lifecycle hooks (`timestamps`) to track records precisely.

---

## 🏗️ Architectural Deep-Dive (MVC Pattern)

The codebase strictly adheres to the clean separation of concerns, decoupling structural data layouts, business operation workflows, and user interface maps.

```text
TechShelf/
├── config/
│   └── db.js               # Database initialization and MongoClient handler
├── controllers/
│   ├── contactController.js # UI rendering and logic for form data collection
│   └── orderController.js   # Transaction handling & async JSON data engines
├── models/
│   ├── Book.js             # Validation structure for inventory schema rules
│   ├── Contact.js          # Blueprint formatting for customer requests
│   └── Order.js            # Structured transaction log schema for checkouts
├── public/
│   ├── css/                # Global style blueprints and scannable visual designs
│   └── js/                 # Client scripts handling fetch payloads
├── routes/
│   ├── index.js            # Base root entry paths (Homepage & Deep-dives)
│   ├── contact.js          # Form-submission endpoints maps
│   └── order.js            # Transaction endpoint hooks
├── views/
│   ├── layouts/            # Component files (header.ejs, footer.ejs)
│   ├── index.ejs           # Main curated dashboard page template
│   ├── contact.ejs         # Contact and request interface view
│   └── bookDetail.ejs      # Dynamic parameterized overview panel
├── .env                    # Decoupled system parameters and keys (Hidden)
├── .gitignore              # Tracking filter guard preventing leakages
├── app.js                  # Central Nervous System & core application runner
└── package.json            # Manifest file mapping dependencies and execution tasks
```
# Core Architecture Components Breakdown

## The Model Layer (/models)
Operates as the application's strict boundary validation team. It intercepts incoming datasets and blocks malformed data structures from entering the database cluster.

## The View Layer (/views)
Server-side engine parses dynamic logic directly into standard markup files. By leveraging structural separation, updates apply universally without modifying underlying business algorithms.

## The Controller Layer (/controllers)
Acts as the brain of the platform. It listens for instructions from the routes, handles the arithmetic data queries from the models, and coordinates view updates back to the browser.

## The Router Layer (/routes)
The application's specialized GPS layer. It maps URL addresses explicitly to the specific controller functions designated to process them.

---

## 🛡️ API Endpoints & Request/Response Flow

### 📋 Public Navigation Paths (GET Routes)
- **GET /**
  - Queries the database for the top 3 newest additions and injects them onto the homepage layout.
- **GET /books**
  - Fetches the complete, unrestricted catalog array to populate the main archive directory view.
- **GET /book/:id**
  - Captures dynamic routing variables (`req.params.id`) to fetch and construct deep-dive overview pages for explicit titles.
- **GET /contact**
  - Serves the reusable interface form allowing out-of-stock request generation.

### ⚙️ Transactional Engine Paths (POST Routes)
- **POST /contact**
  - Form tracking engine. Sanitizes `req.body` arguments, builds a validation record, and saves it to MongoDB.
- **POST /order**
  - The programmatic transactional checkpoint. It validates book records via `.findById()`, builds a custom shopping invoice mapping raw parameters and unique relational object IDs, and replies back with a success message:
```json
{
  "success": true,
  "message": "Order placed successfully!"
}
```

# 🔒 Security Measures & Best Practices

## Isolation of Sensitive Configuration Keys
- All production ports, administrative targets, and specialized database cluster strings are scrubbed completely from public sight.
- Bound locally inside isolated `.env` environments.

## Tracking Filter Guards
- Strict programmatic configuration layers (`.gitignore`) block operational node directories (`node_modules`) and configuration scopes from committing to cloud open-source systems.

## Payload Parsers
- Configured with decoupled **JSON** and **URL**-encoded middleware structures:
  - `express.json()`
  - `express.urlencoded({ extended: true })`
- Handles safe data conversions.

## Global Error Catchers (`try...catch`)
- Database transactional processes are isolated completely inside robust conditional structures.
- If a cluster connection falls offline or drops packets mid-process:
  - The platform stops runtime crashes.
  - Logs the trace internally.
  - Fires a soft **500** Server Error notice back to the browser interface.

# ⚙️ Direct Installation & Local Setup Workflow
Follow these steps to spin up a fully operational copy of TechShelf on your local computing environment.

## Prerequisites
- Ensure you have Node.js (v18.0.0 or higher) installed.
- Ensure you have MongoDB Community Server installed and running on port **27017** locally, or maintain a valid MongoDB Atlas cloud link connection.

## Step 1: Clone the Application Directory
Open your terminal window and fetch the repository code base structure:
```bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/TechShelf.git](https://github.com/YOUR_GITHUB_USERNAME/TechShelf.git)
cd TechShelf
```

## Step 2: Extract and Build Dependencies
Execute the node command tool to safely compile and run your internal package architecture modules:
```bash
npm install
```

## Step 3: Configure the Local Environment
Create a file named exactly `.env` in your root project folder directory:
```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/techshelf
```

## Step 4: Launch the Server Core
Ignite the runtime framework listener system to launch the platform locally:
```bash
node app.js
```
Upon a successful boot process, your console window will output a terminal tracking message link:
"Database connected successfully!"
and indicate that server is executing seamlessly on port [http://localhost:3000](http://localhost:3000).
Open your favorite internet browser tool and navigate directly to [http://localhost:3000](http://localhost:3000) to interact with the finished platform.

# 📄 License 
distributed under the **MIT** License. See **LICENSE** for more information.
