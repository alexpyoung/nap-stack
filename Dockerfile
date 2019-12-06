FROM node:12.13

# Optimistically install node_modules
COPY package.json yarn.lock /tmp/
RUN cd /tmp && yarn install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
COPY . /opt/app
EXPOSE 4000

CMD ["make", "serve"]

