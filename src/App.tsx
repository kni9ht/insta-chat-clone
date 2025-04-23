import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Send, Smile, Info, Camera, Instagram, Home, Search, Compass, Film, Heart, SquarePlus, ChartColumn, TableOfContents, SquarePen, ChevronDown, Video, Phone, Mic, Image, Sticker, HeartIcon } from "lucide-react";
import { Button } from "./components/ui/button";

const users = [
  {
    id: 1,
    name: "Rajesh Shukla",
    inst:"rajesh__82",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    messages: [
      { text: "Hello Yogesh !", fromMe: false, time: "10:01", read:true },
      { text: "Hey Rajesh", fromMe: true, time: "11:23", read:true },
      { text: "Is that plan on ?", fromMe: false, time: "11:25", read:true },
    ],
  },
  {
    id: 2,
    name: "Vivek Pawar",
    inst:"pawarvivekk",
    avatar: "https://scontent.fbom61-1.fna.fbcdn.net/v/t51.2885-15/469949040_3803264403318447_3666032757807668718_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=63f90a&_nc_ohc=FI8O9JcSoaMQ7kNvwGob1cy&_nc_oc=AdnI72mt6GC7pwXDa-AZVrP56Ws1T_Kz6225BiGNzBhqfBjXAjG_cbmwAZo22FLGpIs&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fbom61-1.fna&oh=00_AfHoWW1ytt67HWMiA4_YR8AHQj0Xho4plM2WqMN1oELvtw&oe=680ED3D8",
    messages: [
      { text: "4+ new messages", fromMe: false, time: "1w", read:false }

    ],
  },
  {
    id: 3,
    name: "Mayank Dhargawe",
    inst:"mayank._.d",
    avatar: "https://scontent.fbom61-1.fna.fbcdn.net/v/t51.2885-15/399718074_3638829176393981_2162414455213180771_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=63f90a&_nc_ohc=FbKzM-V0wS0Q7kNvwHu650V&_nc_oc=Adm3xbhifI8fL5iEZbco59MILaw5MVUQVuWuZX_5c90z9YNsaDLkjIOcKJKAiM5jk5E&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fbom61-1.fna&oh=00_AfG8YAi3zgADvOd7VH9MGwpCny_Set6S9gKBJbcLHehciQ&oe=680ECC49",
    messages: [
      { text: "Sent a reel by itsmelucky", fromMe: false, time: "55m", read:false }
    ],
  },
  {
    id: 4,
    name: "Bhavesh Shinde",
    inst:"b_h_a_v_e_s_h__33",
    avatar: "https://scontent.fbom61-1.fna.fbcdn.net/v/t51.2885-15/425276029_1526350587912185_3043634198923647324_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=63f90a&_nc_ohc=YnHB6KxofDkQ7kNvwGuwCOJ&_nc_oc=AdkL7CWWNfPM_EiRewVGS_OI6ztq7koZqWCrntXDgEuEwgKLhHYgK5Be7wphBSB2NdI&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fbom61-1.fna&oh=00_AfG6gNwMI_h72rWhtIcblQKxH_NJg389i6A4tZLfOsh6eQ&oe=680EBD00",
    messages: [
      { text: "3 new messages", fromMe: false, time: "16h", read:false },
    ],
  },
  {
    id: 5,
    name: "shubham.0525",
    inst:"",
    avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/464757728_1075452767001635_2117510124209064534_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=105&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=xXwZYsI0nmcQ7kNvwGKSplU&_nc_oc=Adk2ph4VW9nuUVKQGTpfyFqNA9Db6h9Skvgcc86vCiwcGTzzAbx4Wzdpev6ka-7Nz7o&_nc_ad=z-m&_nc_cid=1174&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AfGmyPWkOYNTyoqBQxPvMHHovRPyx0qZbb5km2WBVY9LIA&oe=680ED214",
    messages: [
      { text: "Sent a reel by crazykadhali", fromMe: false, time: "1d", read:false },
    ],
  },
  {
    id: 6,
    name: "Satish Bhai",
    inst:"mr_satish_raja_",
    avatar: "https://scontent.cdninstagram.com/v/t51.2885-19/488967605_524626107350065_3641584879162038083_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=101&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=eXf_e1drq_IQ7kNvwH7ynlR&_nc_oc=Adlt4fO4909ysKUVf-XBTwi-ewq1S_1XgCP4mndRUOUokllyR6h375X5zNW7m8-TYs8&_nc_ad=z-m&_nc_cid=1174&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AfHgQ8W85ZJhYgjZrarQmCTQqrsSNfEnbnanprUZXPB9ZA&oe=680EC01C",
    messages: [
      { text: "Sent 20h ago", fromMe: false, time: "12:44", read:true },
    ],
  },
  {
    id: 7,
    name: "John Corner",
    inst:"john_4_78",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    messages: [
      { text: "Sent last week", fromMe: false, time: "12:44", read:true },
    ],
  },
  {
    id: 8,
    name: "Zayne Phillips",
    inst:"phillips_zayne",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    messages: [
      { text: "Reacted 🤣 to your message", fromMe: false, time: "2h", read:false },
    ],
  },
  {
    id: 9,
    name: "Sanket Pandey",
    inst:"shanky6767",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    messages: [
      { text: "Seen", fromMe: false, time: "12:44", read:true },
    ],
  },
  {
    id: 10,
    name: "Bharti Rathi",
    inst:"rathi_101",
    avatar: "https://randomuser.me/api/portraits/women/83.jpg",
    messages: [
      { text: "Sent 20h ago", fromMe: false, time: "12:44", read:true },
    ],
  },
];

const DEFAULT_AVATAR =
  "https://static.vecteezy.com/system/resources/previews/039/845/048/non_2x/male-default-placeholder-avatar-profile-gray-picture-isolated-on-white-background-person-placeholder-image-man-silhouette-picture-for-your-design-illustration-free-vector.jpg";

function App() {
  const [selected, setSelected] = useState(0);
  const [convos, setConvos] = useState(users);
  const [input, setInput] = useState("");

  const addMessage = () => {
    if (!input.trim()) return;
    const nextConvos = convos.map((user, idx) =>
      idx === selected
        ? {
            ...user,
            messages: [
              ...user.messages,
              {
                text: input,
                fromMe: true,
                time: new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                read:false
              },
            ],
          }
        : user
    );
    setConvos(nextConvos);
    setInput("");
  };

  return (
    <div className="flex h-screen bg-[#fafafa]">
      {/* Sidebar */}
      
      <aside className="w-[6vw] border-r flex flex-col bg-white">
        <div className="px-6 py-6 h-[75px] flex flex-col items-center justify-between bg-white">
            <Instagram/>
        </div>
        <div className="px-6 py-5 h-[90vh] flex flex-col items-center justify-between bg-white">
          <Home/>
          <Search/>
          <Compass/>
          <Film/>
          <Send/>
          <Heart/>
          <SquarePlus/>
          <ChartColumn/>
          <Avatar>
            <AvatarImage src={"https://scontent.fbom61-1.fna.fbcdn.net/v/t51.2885-15/481599995_643185518266674_1365145177872899967_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=63f90a&_nc_ohc=tMS3QXakdqIQ7kNvwHNS_zB&_nc_oc=Admrp8Xmnloa8-0grNKC2cbIDTtADYhx0tAffbzMzse70Y9CJ3P3p5B4AKiFvUQb0NY&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fbom61-1.fna&oh=00_AfEGt9oKoQ3fsI6OcACqZshaLO9v7qPsoYDbukuk36tekQ&oe=680EECFA"} alt={convos[0].name} />
            <AvatarFallback>
              <span role="img" aria-label="User">
                👤
              </span>
            </AvatarFallback>
          </Avatar>
          <TableOfContents/>
        </div>
      </aside>

      <aside className="w-[380px] border-r flex flex-col bg-white">
        <div className="px-6 py-5 border-b flex items-center justify-between">
          <div className="flex items-center px-1">
            <span className="text-[1.3rem] font-bold">iamyogeshjadhav</span><ChevronDown className="size-[1.2rem] ms-1"/>
          </div>
          <SquarePen/>
        </div>
        <div className="px-6 py-3">
          <Input placeholder="Search..." className="bg-[#efefef] rounded-full" />
        </div>
        <div className="flex-1 overflow-y-auto">
          {convos.map((user, idx) => (
            <div
              key={user.id}
              onClick={() => setSelected(idx)}
              className={`flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-[#fafafa] ${
                selected === idx ? "bg-[#efefef]" : ""
              }`}
            >
              <Avatar>
                <AvatarImage src={user.avatar || DEFAULT_AVATAR} alt={user.name} />
                <AvatarFallback>
                  <span role="img" aria-label="User">
                    👤
                  </span>
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{user.name}</div>
                <div className={user.messages.at(-1)?.read?"text-xs text-gray-500 truncate w-56":"text-xs text-black font-bold truncate w-56"}>
                  {user.messages.at(-1)?.text || "No messages yet"}{user.messages.at(-1)?.read?"":" · "+user.messages.at(-1)?.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat */}
      <section className="flex flex-col flex-1 h-full">
        {/* Chat header */}
        <div className="flex items-center border-b px-6 py-4 bg-white">
          <Avatar className="mr-4">
            <AvatarImage src={convos[selected].avatar || DEFAULT_AVATAR} alt={convos[selected].name} />
            <AvatarFallback>
              <span role="img" aria-label="User">
                👤
              </span>
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium">{convos[selected].name}</div>
            <div className="text-xs text-gray-400">Active 7m ago</div>
          </div>
          <div className="flex flex-row w-[9vw] justify-between items-center gap-3">
            <Phone className="size-[1.6rem] font-bold"/>
            <Video className="size-[2rem]"/>
            <Info className="size-[1.6rem]"/>
          </div>
        </div>
        {/* Message List */}
        <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-2 bg-white">
          <div className="flex items-center justify-center flex-col">
            <Avatar className="size-[5.5rem]">
              <AvatarImage src={convos[selected].avatar || DEFAULT_AVATAR} alt={convos[selected].name} />
              <AvatarFallback>
                <span role="img" aria-label="User">
                  👤
                </span>
              </AvatarFallback>
            </Avatar>
            <div className="text-2xl font-bold">{convos[selected].name}</div>
            <div className="text-sm font-thin text-gray-500">{convos[selected].inst+" . Instagram"}</div>
            <Button className="my-3 bg-gray-200 text-black font-bold hover:bg-gray-300">View Profile</Button>
            <div className="text-xs font-thin text-gray-500 mt-[3rem] mb-[2rem]">12:12 pm</div>
          </div>
          {convos[selected].messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-2xl px-4 py-2 max-w-[60%] text-sm ${
                  msg.fromMe ? "bg-[#3797f0] text-white" : "bg-white border"
                }`}
              >
                {msg.text}
                <span className="block text-xs opacity-50 mt-1 text-right">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Input*/}
        <form
          className="flex items-center gap-2 my-3 h-[3rem] mx-2 px-6 py-3 bg-white border-[0.5px] rounded-full border-[#808080]"
          onSubmit={(e) => {
            e.preventDefault();
            addMessage();
          }}
        >
          <Smile className="w-6 h-6" />
          <Input
            className="flex-1"
            style={{border:"none", outline:"none", boxShadow:"none"}}
            placeholder="Message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <Mic className="w-6 h-6" />
          <Image className="w-6 h-6" />
          <Sticker className="w-6 h-6" />
          <HeartIcon className="w-6 h-6" />
        </form>
      </section>
    </div>
  );
}

export default App;
