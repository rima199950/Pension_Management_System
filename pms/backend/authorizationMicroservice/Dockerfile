FROM openjdk:8
EXPOSE 9084
ADD target/authorizationService.jar authorizationService.jar 
ENTRYPOINT ["java","-jar","/authorizationService.jar"]