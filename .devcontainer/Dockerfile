ARG VARIANT="bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

ENV SHELL /bin/bash
# Install prerequisites
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs git lsof
RUN npm install -g truffle ganache open-cli
## Github CLI for port forwarding
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt update \
    && apt install gh -y

# Setup users according to VSCode document: https://code.visualstudio.com/remote/advancedcontainers/add-nonroot-user
ARG USERNAME=vscode
RUN mkdir -p /com.docker.devenvironments.code
RUN chown -R vscode:vscode /com.docker.devenvironments.code

USER $USERNAME