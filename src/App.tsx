import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Send, Smile, Info, Camera, Instagram, Home, Search, Compass, Film, Heart, SquarePlus, ChartColumn, TableOfContents, SquarePen, ChevronDown, Video, Phone, Mic, Image, Sticker, HeartIcon } from "lucide-react";
import { Button } from "./components/ui/button";

const users = [
  {
    id: 1,
    name: "Jane Cooper",
    inst:"cooperjane256",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    messages: [
      { text: "Hi there!", fromMe: false, time: "10:00" },
      { text: "Hello! 😊", fromMe: true, time: "10:01" },
      { text: "How are you?", fromMe: false, time: "10:02" }

    ],
  },
  {
    id: 2,
    name: "Wade Warren",
    inst:"wade3456",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    messages: [
      { text: "Yo! What's up?", fromMe: false, time: "9:23" },
      { text: "Not much! You?", fromMe: true, time: "9:25" },
    ],
  },
  {
    id: 3,
    name: "Esther Howard",
    inst:"iamesther",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    messages: [
      { text: "Can you send the files?", fromMe: false, time: "12:44" },
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
          <Send/>
          <SquarePlus/>
          <ChartColumn/>
          <Avatar>
            <AvatarImage src={convos[0].avatar || DEFAULT_AVATAR} alt={convos[0].name} />
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
            <span className="text-[1.3rem] font-bold">johnplay</span><ChevronDown className="size-[1.2rem] ms-1"/>
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
                <div className="text-xs text-gray-500 truncate w-36">
                  {user.messages.at(-1)?.text || "No messages yet"}
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
