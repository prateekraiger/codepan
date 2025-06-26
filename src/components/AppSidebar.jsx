import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Square, Zap, ChevronDown, ChevronRight } from "lucide-react";

const groups = [
  { key: "buttons", label: "Buttons" },
  { key: "cards", label: "Cards" },
  { key: "text", label: "Text Animations" },
  { key: "loaders", label: "Loaders" },
  { key: "forms", label: "Forms" },
  { key: "cursors", label: "Cursors" },
];

const AppSidebar = ({ selected, setSelected }) => {
  const [openGroups, setOpenGroups] = useState({
    buttons: true,
    cards: false,
    loaders: false,
    forms: false,
    text: false,
    cursors: false,
  });

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Always-visible sidebar trigger, pinned to the left edge */}
      <div className="fixed top-20 left-0 z-30 md:flex flex-col items-center hidden">
        <SidebarTrigger className="bg-gray-900 text-blue-400 hover:text-blue-200 rounded-r-lg shadow-lg p-2 m-0" />
      </div>
      <Sidebar
        className="min-h-screen border-r border-gray-700 bg-gray-800 text-gray-100 pt-16 z-20"
        collapsible={undefined}
      >
        {/* SidebarTrigger for mobile at the top */}
        <div className="p-2 border-b border-gray-700 bg-gray-900/90 flex justify-center md:hidden">
          <SidebarTrigger className="w-full" />
        </div>
        <SidebarContent className="overflow-y-auto h-full">
          {/* Buttons Group */}
          <SidebarGroup>
            <div
              className="flex items-center justify-between px-4 py-2 font-bold text-base border-b border-gray-700 cursor-pointer select-none"
              onClick={() => toggleGroup("buttons")}
            >
              <SidebarGroupLabel className="p-0 m-0">Buttons</SidebarGroupLabel>
              <SidebarGroupAction asChild>
                {openGroups.buttons ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </SidebarGroupAction>
            </div>
            {openGroups.buttons && (
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={selected === "button"}
                      onClick={() => setSelected("button")}
                    >
                      <Square className="mr-2 w-4 h-4" />
                      Default Button
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={selected === "thanos"}
                      onClick={() => setSelected("thanos")}
                    >
                      <Zap className="mr-2 w-4 h-4" />
                      Thanos Button
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
          {/* Cards Group */}
          <SidebarGroup>
            <div
              className="flex items-center justify-between px-4 py-2 font-bold text-base border-b border-gray-700 cursor-pointer select-none"
              onClick={() => toggleGroup("cards")}
            >
              <SidebarGroupLabel className="p-0 m-0">Cards</SidebarGroupLabel>
              <SidebarGroupAction asChild>
                {openGroups.cards ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </SidebarGroupAction>
            </div>
            {openGroups.cards && (
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={selected === "samplecard"}
                      onClick={() => setSelected("samplecard")}
                    >
                      <Square className="mr-2 w-4 h-4" />
                      Sample Card
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
          {/* Text Animations Group */}
          <SidebarGroup>
            <div
              className="flex items-center justify-between px-4 py-2 font-bold text-base border-b border-gray-700 cursor-pointer select-none"
              onClick={() => toggleGroup("text")}
            >
              <SidebarGroupLabel className="p-0 m-0">
                Text Animations
              </SidebarGroupLabel>
              <SidebarGroupAction asChild>
                {openGroups.text ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </SidebarGroupAction>
            </div>
            {openGroups.text && (
              <SidebarGroupContent>
                {/* Add text animation menu items here later */}
              </SidebarGroupContent>
            )}
          </SidebarGroup>
          {/* Loaders Group */}
          <SidebarGroup>
            <div
              className="flex items-center justify-between px-4 py-2 font-bold text-base border-b border-gray-700 cursor-pointer select-none"
              onClick={() => toggleGroup("loaders")}
            >
              <SidebarGroupLabel className="p-0 m-0">Loaders</SidebarGroupLabel>
              <SidebarGroupAction asChild>
                {openGroups.loaders ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </SidebarGroupAction>
            </div>
            {openGroups.loaders && (
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={selected === "loader1"}
                      onClick={() => setSelected("loader1")}
                    >
                      Loader 1
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={selected === "loader2"}
                      onClick={() => setSelected("loader2")}
                    >
                      Loader 2
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={selected === "loader3"}
                      onClick={() => setSelected("loader3")}
                    >
                      Loader 3
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
          {/* Forms Group */}
          <SidebarGroup>
            <div
              className="flex items-center justify-between px-4 py-2 font-bold text-base border-b border-gray-700 cursor-pointer select-none"
              onClick={() => toggleGroup("forms")}
            >
              <SidebarGroupLabel className="p-0 m-0">Forms</SidebarGroupLabel>
              <SidebarGroupAction asChild>
                {openGroups.forms ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </SidebarGroupAction>
            </div>
            {openGroups.forms && (
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={selected === "form1"}
                      onClick={() => setSelected("form1")}
                    >
                      Sample Form
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
          {/* Cursors Group */}
          <SidebarGroup>
            <div
              className="flex items-center justify-between px-4 py-2 font-bold text-base border-b border-gray-700 cursor-pointer select-none"
              onClick={() => toggleGroup("cursors")}
            >
              <SidebarGroupLabel className="p-0 m-0">Cursors</SidebarGroupLabel>
              <SidebarGroupAction asChild>
                {openGroups.cursors ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </SidebarGroupAction>
            </div>
            {openGroups.cursors && (
              <SidebarGroupContent>
                {/* Add cursor menu items here later */}
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
