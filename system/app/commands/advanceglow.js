export const setup = {
  name: "advanceglow",
  version: "40.0.3",
  permission: "Users",
  creator: "John Lester",
  description: "Advanceglow Text Effect",
  category: "Text Generation",
  usages: ["[text]"],
  mainScreenshot: ["/media/advanceglow/screenshot/main.jpg"],
  screenshot: ["/media/advanceglow/screenshot/main.jpg"],
  cooldown: 5,
  isPrefix: true
};
export const domain = {"advanceglow": setup.name};
export const execCommand = async function({api, event, key, kernel, umaru, args, keyGenerator, Users, context}) {
  await umaru.createJournal(event);
  let text = args.join(" ");
  if(args.length === 0) text = await Users.getName(event.senderID);
  return api.sendMessage({body: context, attachment: await kernel.readStream(["advanceglow"], {key: key, text: text})}, event.threadID, async() => {
    await umaru.deleteJournal(event);
  }, event.messageID)
}