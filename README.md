# Tanzu Platform Demo

A Spring Boot application with a Vue.js frontend.

## Prerequisites

- Java 11
- Maven 3.6+

## Tech Stack

- Spring Boot
- Spring MVC
- Spring Actuator
- Log4j2
- Vue 3 (CDN)

## Project Structure

```
src/main/
├── java/com/example/tpdemo/
│   ├── TpDemoApplication.java      # Application entry point
│   └── HelloController.java        # REST controller (/hello)
└── resources/
    ├── application.properties       # Server and actuator configuration
    ├── log4j2.xml                   # Log4j2 configuration
    └── static/
        ├── index.html               # Vue.js single-page app
        ├── images/                  # Static images (logo)
        ├── css/style.css            # Styles
        └── js/app.js                # Vue app logic
```

## Running the Application

```bash
mvn spring-boot:run
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## Endpoints

| Path | Description |
|------|-------------|
| `/` | Vue.js frontend |
| `/hello` | REST endpoint returning a greeting |
| `/actuator/info` | Application info (Spring Boot version, Java version) |
| `/actuator/health` | Health check endpoint |

## Frontend Features

The web UI displays:

- **Greeting message** - Response from `/hello` endpoint
- **Runtime Info** - Spring Boot and Java versions from actuator

## Logging

Logs are written using Log4j2. The configuration is in `src/main/resources/log4j2.xml`.