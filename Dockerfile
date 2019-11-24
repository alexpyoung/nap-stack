FROM node:12.13

WORKDIR /app

COPY . .

EXPOSE 4000

RUN make install

CMD ["make", "serve"]

