FROM mongo:latest
RUN mongosh -f testing_script.js
