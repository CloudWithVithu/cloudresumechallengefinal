# 🌩️ Cloud Resume Challenge (Azure Edition)

This is my implementation of the **Cloud Resume Challenge**, a full-stack cloud project designed to showcase real-world cloud engineering skills using Microsoft Azure.

---

## 📌 Project Purpose

The goal of this project is to apply and demonstrate my hands-on skills in Azure by building and deploying a fully cloud-native, serverless web application. It serves as both a personal portfolio and a technical proof-of-capability to recruiters and professionals in cloud computing.

---

## 🧰 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Azure Functions (JavaScript)
- **Database**: Azure Table Storage
- **Infrastructure as Code**: Azure CLI & ARM (manually deployed)
- **CI/CD**: GitHub Actions
- **Hosting**: Azure Blob Storage (Static Website)
- **Monitoring**: Azure Application Insights (optional)
- **Version Control**: Git & GitHub

---

## 🚀 Live Demo

🟢 [https://cloudwithvithu.z13.web.core.windows.net/](https://cloudwithvithu.z13.web.core.windows.net/)

---

## 💡 Key Features

- ✅ Static website hosted via Azure Blob Storage
- ✅ Visitor counter powered by Azure Function and Table Storage
- ✅ Azure Function with HTTP Trigger written in JavaScript
- ✅ Fully integrated CI/CD pipeline using GitHub Actions
- ✅ Version-controlled infrastructure and code
- ✅ Custom domain ready (optional)
- ✅ Serverless, scalable, and cost-efficient architecture

---

## 📁 Project Structure

├── .github/workflows # GitHub Actions CI/CD pipeline
├── api # Azure Function (JavaScript)
│ └── GetResumeCounter/
│ ├── function.json
│ ├── index.js
├── index.html # Main HTML page
├── styles.css # Styling
├── script.js # JS to call Azure Function
└── README.md


---

## ⚙️ Deployment Steps

> Ensure you have the Azure CLI installed and logged in.

### 1. **Deploy Frontend**

```bash
az storage account create --name <your_storage_account> --resource-group <rg> --location <region> --sku Standard_LRS --kind StorageV2
az storage blob service-properties update --account-name <your_storage_account> --static-website --index-document index.html
az storage blob upload-batch -s . -d '$web' --account-name <your_storage_account>


> Deploy Azure Function

cd api/GetResumeCounter
func azure functionapp publish <your_function_app_name>

Don't forget to configure CORS and connection string for Table Storage in Function App settings.


🔄 CI/CD Pipeline

    GitHub Actions is configured to automatically deploy your frontend on push to main.

    Add secrets to your GitHub repo:

        AZURE_STORAGE_ACCOUNT_NAME

        AZURE_STORAGE_ACCOUNT_KEY

        AZURE_FUNCTIONAPP_PUBLISH_PROFILE (for backend)



🧠 What I Learned

    Azure Blob Storage static hosting

    Writing and deploying serverless functions on Azure

    Azure Table Storage for lightweight NoSQL data

    GitHub Actions for automated deployment

    Troubleshooting CORS and Function App permissions

    Structuring a cloud-native, scalable portfolio project



👤 About Me

I’m actively learning and building in the cloud space. This project is my attempt to prove that I am ready for real-world roles involving Azure, DevOps, and cloud architecture.

If you’re a recruiter or cloud enthusiast, feel free to explore the project or connect with me.

