<div align="center">

# 🚀 Next.js Google Analytics Component  

<div align="center">

Welcome to **nextjs-ga**, a simple and reusable React component to seamlessly integrate Google Analytics into your Next.js applications. <br /> No need to install an npm package—just copy and paste the component into your project, and you're good to go! 

</div>

<div>

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)  
![Google Analytics](https://img.shields.io/badge/Google%20Analytics-E37400?style=for-the-badge&logo=google%20analytics&logoColor=white)  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)  
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge) 

</div>

</div>

---

## 🌟 Why Use This Component?  

Tracking user behavior and website performance is crucial for optimizing your Next.js app. With this component, you can:  
- **Easily Add Google Analytics**: No complex setup or npm installations required.  
- **Reusable and Customizable**: Pass your Google Analytics Tracking ID (`gid`) as a prop.  
- **Lightweight and Efficient**: Uses Next.js's `Script` component for optimal performance.  
- **Validation Included**: Ensures your `gid` is in the correct format.  

---

## 🛠️ How to Use  

### Step 1: Copy the Component  

Create a new file in your `components` folder (e.g., `components/google-analytics.tsx`) and paste the following code:  

```tsx
// components/google-analytics.tsx
"use client";
import Script from "next/script";
import { useEffect } from "react";

interface AnalyticsProps {
  gid: string;
}

export default function Analytics({ gid }: AnalyticsProps) {
  useEffect(() => {
    // Validate the Google Analytics Tracking ID
    const isValidGid = /^G-[A-Z0-9]+$/.test(gid);
    if (!isValidGid) {
      console.error(
        "Invalid Google Analytics Tracking ID. Expected format: G-[A-Z0-9]+"
      );
      return;
    }
  }, [gid]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gid}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gid}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
```  

---

### Step 2: Add the Component to Your App  

Import and use the `Analytics` component in your `_app.tsx` (or `layout.tsx`) file to ensure it loads on every page:  

```tsx
// pages/_app.tsx
import Analytics from "@/components/google-analytics";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Analytics gid="G-2087S873KK" />
      <Component {...pageProps} />
    </>
  );
}
```  

OR

```tsx
// app/layout.tsx
import Analytics from "@/components/google-analytics";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      ... // Previous Code
      <Analytics gid="G-2087S873KK" />
      ... // Other Code
    </>
  );
}
```  

Replace `"G-2087S873KK"` with your actual **Google Analytics Tracking ID**.  

---

### Step 3: Deploy and Verify  

Deploy your Next.js app and visit your website. Open the **Google Analytics Real-Time Dashboard** to verify that your website is sending data.  

---

## ✨ Features  

### 1. **Reusable Component**  
Pass your Google Analytics Tracking ID (`gid`) as a prop to make the component reusable across multiple projects.  

### 2. **Validation**  
The component includes a validation check to ensure your `gid` is in the correct format (`G-[A-Z0-9]+`). If the ID is invalid, an error will be logged to the console.  

### 3. **Optimized Performance**  
The `Script` component from Next.js ensures the Google Analytics script is loaded efficiently without blocking your page render.  

### 4. **TypeScript Support**  
The component is written in TypeScript, providing better tooling support and type safety.  

---

## 🚀 Example Usage  

### Basic Usage  
```tsx
<Analytics gid="G-2087S873KK" />
```  

### Dynamic Tracking ID  
If your tracking ID is stored in an environment variable, you can pass it dynamically:  

```tsx
<Analytics gid={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
```  

---

## 🤝 Contributing  

Contributions are welcome! If you have ideas for improvements or find any issues, feel free to:  
- Open an issue on the [GitHub repository](https://github.com/Tomilola-ng/nextjs-ga).  
- Submit a pull request with your changes.  

Let’s make this component even better together!  

---

## 👋 Follow Me  

If you found this component helpful, consider following me on:  
- **X (Twitter)**: [@Tomilola_ng](https://twitter.com/Tomilola_ng)  
- **GitHub**: [Tomilola-ng](https://github.com/Tomilola-ng)  

Your support means a lot!  

---

## 📜 License  

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it as you see fit.  

---

## 📚 References  

- [Next.js Documentation](https://nextjs.org/docs)  
- [Google Analytics Documentation](https://developers.google.com/analytics/devguides/collection/gtagjs)  

--- 

✨ **Star this repository if you found it helpful!** ✨
