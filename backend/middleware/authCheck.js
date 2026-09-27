import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(400).send({
      message: "Please Login first",
    });
  }

  const userData = jwt.verify(token, "secretKey");

  req.userrole =
    userData.userrole === "admin"
      ? "admin"
      : userData.userrole === "user"
        ? "user"
        : userData.userrole === "superAdmin"
          ? "superAdmin"
          : null;

  next();
};

export const isAdmin = (req, res, next) => {
  const role = req.userrole;
  if (role === "admin") {
    next();
  } else {
    res.status(401).send({
      message: "Unauthorized Role",
    });
  }
};
export const isSuperAdmin = (req, res, next) => {
  const role = req.userrole;

  if (role === "superAdmin") {
    next();
  } else {
    res.status(401).send({
      message: "Unauthorized Role",
    });
  }
};
export const isSuperAdminOrAdmin = (req, res, next) => {
  const role = req.userrole;

  if (role === "superAdmin" || role === "admin") {
    next();
  } else {
    res.status(401).send({
      message: "Unauthorized Role",
    });
  }
};

export const isUser = (req, res, next) => {
  const role = req.userrole;

  if (role === "user") {
    next();
  } else {
    res.status(401).send({
      message: "Unauthorized Role",
    });
  }
};