
# Medusa.js Backend - Frontline Military

![Medusa.js](https://medusajs.com/meta-og-image.jpg)

Welcome to the **Medusa.js Backend** for **Frontline Military**, developed by **Scott Jones** of **NetGuru Solutions**. This backend powers a dynamic, modular, and feature-rich e-commerce solution tailored for military and tactical retailers.

---

## 📥 Download & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/PinkyCodeMaster/medusajs-backend.git
cd medusajs-backend
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory with the following configurations:

```env
# Admin and Storefront Configuration
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
MEDUSA_ADMIN_ONBOARDING_NEXTJS_DIRECTORY={yourstore}-storefront
STORE_CORS=http://localhost:8000,https://docs.medusajs.com
ADMIN_CORS=http://localhost:5173,http://localhost:9000,https://docs.medusajs.com
AUTH_CORS=http://localhost:5173,http://localhost:9000,https://docs.medusajs.com

# Database and Cache
DATABASE_URL=postgresql://postgres:<password>@<host>:<port>/railway
REDIS_URL=redis://localhost:6379

# Authentication and Cookies
JWT_SECRET=<your-jwt-secret>
COOKIE_SECRET=<your-cookie-secret>

# Stripe and SendGrid
STRIPE_API_KEY=<your-stripe-api-key>
SENDGRID_API_KEY=<your-sendgrid-api-key>
SENDGRID_FROM=noreply@Replaceme.co.uk

# S3 Configuration
S3_BUCKET=example
S3_FILE_URL=https://{{S3_ENDPOINT}}/{{S3_BUCKET}}
S3_ACCESS_KEY=<your-access-key>
S3_SECRET_KEY=<your-secret-key>
S3_REGION=us-east-1
S3_ENDPOINT=https://example.railway.app

# Sanity CMS
SANITY_API_TOKEN=<your-sanity-api-token>
SANITY_PROJECT_ID=******
SANITY_STUDIO_URL=http://localhost:8000/studio

```

### 4. Start Development Server
```bash
yarn dev
```

Access your application:  
- **Storefront API**: `http://localhost:9000`  
- **Admin Dashboard**: `http://localhost:9000/app`  

---

## 🌟 Features

- **S3 File Storage**: Secure file handling using MinIO.
- **SendGrid Notifications**: Reliable email system for user communications.
- **Stripe Payments**: Flexible and seamless payment gateway.
- **Sanity CMS**: Fully integrated for dynamic content management.
- **Customizable CORS**: Fine-tuned for seamless integration with APIs and frontends.

---

## 📦 Deployment Instructions

### Production Setup
1. Build the application:
   ```bash
   yarn build
   ```
2. Start the server in production:
   ```bash
   yarn start
   ```

### Recommended Hosting
- **Azure**: Scalable hosting with high availability.
- **Railway**: Lightweight deployment for rapid production.

---

## 📞 Contact & Support

For support, contact **Scott Jones**:  
- **Email**: [scottjones@netgurusolutions.co.uk](mailto:scottjones@netgurusolutions.co.uk)  
- **Website**: [NetGuru Solutions](https://netgurusolutions.co.uk)

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to [download the latest release](https://github.com/PinkyCodeMaster/medusajs-backend/releases) and raise issues or contribute to the project in the [Issues](https://github.com/PinkyCodeMaster/medusajs-backend/issues) section. Enjoy coding! 😊

---
