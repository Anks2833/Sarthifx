import WhatsappIcon from '../Icons/Whatsapp/WhatsappIcon'
import ChatIcon from '../Icons/Chat/ChatIcon'

const ChatIcons = () => {
  return (
    <div className='fixed bottom-8 right-8 z-50 flex flex-col gap-5'>
        <ChatIcon />
        <WhatsappIcon />
    </div>
  )
}

export default ChatIcons;