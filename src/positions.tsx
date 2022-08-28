import * as React from "react";
import AllEducationTerms from "./components/AllEducationTerms";
import { blinnTerms } from "./education";

export interface Position {
  position: string;
  team?: string;
  company?: string;
  link: string;
  email: string;
  children?: JSX.Element;
}

export const freeSoftwareEnthusiast: Position = {
  position: "Free software enthusiast",
  link: "https://piperswe.me",
  email: "contact@piperswe.me",
};

export const blinn: Position = {
  position: "Student",
  team: "AS Mathematics",
  company: "Blinn College",
  link: "https://blinn.edu",
  email: "zebulon.mccorkle36@buc.blinn.edu",
  children: <AllEducationTerms terms={blinnTerms} />,
};

export const cloudflare: Position = {
  position: "Systems engineer",
  team: "Waiting Room",
  company: "Cloudflare",
  link: "https://cloudflare.com",
  email: "piper@cloudflare.com",
};

export const lutris: Position = {
  position: "CEO & General engineer",
  company: "Lutris",
  link: "https://lutris.engineering",
  email: "piper@lutris.engineering",
};
