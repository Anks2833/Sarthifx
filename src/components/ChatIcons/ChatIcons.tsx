import WhatsappIcon from "../Icons/Whatsapp/WhatsappIcon";
import ChatIcon from "../Icons/Chat/ChatIcon";

const ChatIcons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[20] flex flex-col gap-5 sm:bottom-4 sm:right-4 sm:gap-3">
      <ChatIcon />
      <WhatsappIcon />
    </div>
  );
};

export default ChatIcons;
