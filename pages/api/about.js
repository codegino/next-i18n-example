export default function handler(req, res) {
  const lang = req.query.lang || "en";

  if (lang === "sv") {
    return res.status(200).json({ message: "Jag är Code Gino" });
  } else if (lang === "zh-CN") {
    return res.status(200).json({ message: "我是代码吉诺" });
  } else {
    return res.status(200).json({ message: "I am Code Gino" });
  }
}
