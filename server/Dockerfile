FROM golang:1.17-alpine

WORKDIR /server

COPY . .

RUN go build

EXPOSE 5000

CMD [ "go", "run", "main.go" ]