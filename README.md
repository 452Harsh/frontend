```md
# MiniLinkedIn Frontend

This is the **frontend** for the MiniLinkedIn Community Platform built with **Next.js App Router**, **Tailwind CSS**, and **Axios**. It provides features like:

- User authentication
- Post creation and feed
- Profile page
- Responsive UI with Tailwind CSS

---

## 📁 Project Structure

```

frontend/
├── app/                    # App Router (pages, routing)
│   ├── home/               # Home feed (Post listing)
│   ├── profile/            # User profile page
│   └── login/, register/   # Auth pages
├── components/             # UI components (Navbar, PostCard, etc.)
├── lib/                    # Axios instance (API setup)
├── styles/                 # Tailwind/global CSS
├── public/                 # Static assets
├── .env.local              # Environment variables
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS config
├── package.json
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/minilinkedin-frontend.git
cd minilinkedin-frontend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root with the following:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Make sure the backend is running at this URL. Update if deployed.

### 4. Run the development server

```bash
npm run dev
```

Frontend will be live at [http://localhost:3000](http://localhost:3000)

---

## 🔧 Features

* ✅ App Router with Server Components
* ✅ Tailwind CSS styling
* ✅ Axios for API calls
* ✅ Auth with JWT (token stored in localStorage)
* ✅ Post feed and creation
* ✅ Profile view
* ✅ Loading bar animation

---

## 🧪 Scripts

```bash
npm run dev       # Run development server
npm run build     # Build for production
npm run start     # Start production server
```

---

## 📦 Dependencies

* [Next.js (App Router)](https://nextjs.org/docs/app)
* [Tailwind CSS](https://tailwindcss.com/)
* [Axios](https://axios-http.com/)
* [React Icons](https://react-icons.github.io/react-icons/)

---

## 📸 Screenshots (Optional)

You can add screenshots like:

```
/screenshots/home.png
/screenshots/profile.png
```

Then embed them:

```md
![Home Page](screenshots/home.png)
```


---

## 📬 API Reference

All requests are made to the backend via:

```
${NEXT_PUBLIC_API_URL}/
```

Example endpoints:

* `GET /posts`
* `POST /posts`
* `GET /profile/:id`
* `POST /auth/register`
* `POST /auth/login`

---



