<!-- @format -->

# 💻 Personal Portfolio – Full Stack Application with AWS Infrastructure

This is the repository for my personal portfolio website, a fully responsive and production-grade **React-based application** deployed entirely on **AWS**. The site showcases my **software engineering experience**, highlights technical projects, and demonstrates my proficiency in **cloud-native application development**, **infrastructure as code**, and **modern DevOps workflows**.

---

## 🔗 Live Portfolio

🌍 **Live Site**: [https://lamounierdigital.com](https://lamounierdigital.com)

---

## 🧰 Tech Stack Overview

| Area                 | Technologies                                        |
| -------------------- | --------------------------------------------------- |
| **Frontend**         | React, TypeScript, Styled Components, Framer Motion |
| **Infrastructure**   | Docker, CloudFormation, Amazon ECS, ECR, EC2        |
| **Email Service**    | AWS SES                                             |
| **Routing & Domain** | Amazon Route 53                                     |
| **CI/CD**            | AWS CodePipeline, CodeBuild                         |
| **Containerisation** | Dockerfile (multi-service architecture)             |

---

## 📌 Key Features

- **Responsive SPA** built with **React + TypeScript**, designed for desktop and mobile.
- **Microservices Architecture** using Docker containers deployed on **Amazon ECS**.
- **Integrated Contact Form** using **API Gateway + Lambda + AWS SES** for secure email submissions.
- **Dynamic Routing** and **domain management** through **Amazon Route 53**.
- **CI/CD Pipeline** triggered on GitHub commits, managed via **AWS CodePipeline** and **CloudFormation**.
- Embedded demo project deployments hosted as separate services under a shared ECS cluster.

---

## 🛠️ Architecture & Deployment

The full application is hosted on **AWS** and structured for scalability and modularity:

- **Frontend** is containerised and deployed using **Docker + ECS**.
- **Infrastructure as Code** defined using **CloudFormation nested stacks**, managing services like ECS, ECR, IAM, VPC, and ALB.
- **Contact Form** is handled via **serverless Lambda functions**, triggered by **API Gateway** and integrated with **SES**.
- **Domain routing and SSL** managed via **Amazon Route 53 + ACM**.
- Additional demo apps (also containerised) are deployed as **separate ECS services** behind the same ALB.

---

## 🧪 Purpose

This portfolio demonstrates:

- Full lifecycle software development: from frontend to backend to infrastructure.
- Real-world DevOps practices including Dockerisation, CI/CD pipelines, and secure IAM configuration.
- Scalable, cloud-native application hosting on **AWS using production-ready patterns**.

---

## 📄 License & Usage

This repository is part of my personal portfolio. It is intended for demonstration purposes only. Do not reuse or redistribute without permission.
