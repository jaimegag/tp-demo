# CLAUDE.md

## Build & Run

- Build: `mvn clean package -DskipTests`
- Run: `mvn spring-boot:run`
- Test: `mvn test`

## Tech Stack

- Spring Boot 2.7.x (Java 11 required)
- Log4j2 for logging (not SLF4J)
- Vue 3 via CDN (no build step for frontend)

## Conventions

- Use constructor injection, not @Autowired on fields
- Use `LogManager.getLogger()` from Log4j2 for logging
- Static frontend files go in `src/main/resources/static/`

## Project Structure

- `TpDemoApplication.java` - Entry point
- `HelloController.java` - Simple greeting endpoint

## Endpoints

| Path | Description |
|------|-------------|
| `/` | Vue.js frontend |
| `/hello` | Greeting message |
| `/actuator/info` | Spring Boot and Java version |
| `/actuator/health` | Health check |