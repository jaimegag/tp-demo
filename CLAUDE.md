# CLAUDE.md

## Build & Run

- Install parent POM first: `mvn -f external-parent/pom.xml install`
- Build: `mvn clean package -DskipTests`
- Run: `mvn spring-boot:run`
- Test: `mvn test`

## Tech Stack

- Spring Boot 2.7.x (Java 11 required)
- Standalone parent POM in `external-parent/` (`com.example:tp-demo-external-parent`), which extends `spring-boot-starter-parent`; the app references it by coordinates only (empty `relativePath`). `spring-boot-starter-actuator` is inherited from this parent, not declared in the app POM
- Log4j2 for logging (not SLF4J)
- Vue 3 via CDN (no build step for frontend)
- java-cfenv for Cloud Foundry environment access

## Conventions

- Use constructor injection, not @Autowired on fields
- Use `LogManager.getLogger()` from Log4j2 for logging
- Static frontend files go in `src/main/resources/static/`
- Check for `VCAP_APPLICATION` env var before using CfEnv APIs

## Project Structure

- `TpDemoApplication.java` - Entry point
- `HelloController.java` - Simple greeting endpoint
- `CfEnvService.java` - Reads CF environment at startup, exposes via getter
- `CfEnvInfo.java` - Data model for CF environment
- `CfEnvController.java` - REST endpoint for CF environment data

## Endpoints

| Path | Description |
|------|-------------|
| `/` | Vue.js frontend |
| `/hello` | Greeting message |
| `/cfenv` | CF environment info (404 when not on CF) |
| `/actuator/info` | Spring Boot and Java version |
| `/actuator/health` | Health check |

## Cloud Foundry

When running on CF/Tanzu Platform:
- `CfEnvService` reads `VCAP_APPLICATION` and `VCAP_SERVICES`
- Application info and bound services are logged at startup
- Data is exposed via `/cfenv` endpoint

When running locally:
- CF environment reading is skipped
- `/cfenv` returns 404