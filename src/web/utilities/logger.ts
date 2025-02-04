import { Logger, createLogger, format, transports } from "winston";
const { combine, timestamp, printf, json } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger: Logger = createLogger({
  format: combine(timestamp(), logFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "info.log", level: "info" }),
    new transports.File({ filename: "debug.log", level: "debug" }),
    new transports.File({ filename: "warn.log", level: "warn" }),
    new transports.File({ filename: "combined.log" }),
  ],

  exceptionHandlers: [new transports.File({ filename: "exceptions.log" }), new transports.Console()],
  rejectionHandlers: [new transports.File({ filename: "rejections.log" }), new transports.Console()],

  exitOnError: false,
});

export default logger;
