# 📦 PharmDelivery – React + Vite Application

**PharmDelivery** is a modern, responsive React application built with Vite, featuring interactive maps, smooth animations, clean UI, and automated deployment using GitHub Pages.

---

## 🚀 Features

* **⚡ Super-fast development:** Powered by Vite.
* **🗺️ Interactive maps:** Integrated using Leaflet & React-Leaflet.
* **🎬 Smooth animations:** UI transitions powered by Framer Motion.
* **🧭 Clean iconography:** Vector icons provided by Lucide-React.
* **📱 Fully responsive:** Optimized for mobile and desktop layouts.
* **🔐 Secure configuration:** Environment variable handling with Vite.
* **☁️ CI/CD:** Continuous deployment via GitHub Actions to GitHub Pages.

---

## 🏗️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite |
| **Maps** | Leaflet, React-Leaflet |
| **Animations** | Framer Motion |
| **Icons** | Lucide-React |
| **Deployment** | GitHub Actions, GitHub Pages |

---

## 📁 Project Structure

```text
pharmdelivery/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone [https://github.com/](https://github.com/)<your-username>/pharmdelivery.git
cd pharmdelivery
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Start the development server
```bash
npm run dev
```

## The application will run at:
> http://localhost:3000/
>

## 🌐 Deployment (GitHub Pages)

This project is configured to auto-deploy using **GitHub Actions**.

### Prerequisites:

1.  **Update `vite.config.js`:**
    Ensure the base path matches your repository name:
    ```javascript
    base: "/pharmdelivery/",
    ```

2.  **Configure GitHub Settings:**
    * Go to **Settings** → **Pages**.
    * Under **Build and deployment**, set **Source** to **GitHub Actions**.

3.  **Deploy:**
    * Push your changes to the `main` branch.
    * GitHub Actions will automatically build and deploy the site.

**Live website:**
> `https://Raviteja5469.github.io/pharmdelivery/`
>
---


## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome.

---

## 📄 License

This project is licensed under the **MIT License**.