import {
  Item,
  ItemHeader,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemFooter,
} from "@/components/ui/item";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Me() {
  return (
    <div className="flex flex-col gap-y-16">
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I’m a recent Information Technology graduate from Monash University in
          Melbourne, Australia, with experience working collaboratively in teams
          to deliver live projects. Skilled in agile methodologies and
          end-to-end project development, I’m passionate about creating
          practical, high-quality software. I’m seeking an entry-level software
          engineering role where I can contribute my technical skills,
          problem-solving mindset, and enthusiasm for technology.
        </p>
      </div>
      <div>
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance">
          Personal Projects
        </h1>
      </div>
      <div className="flex flex-col gap-y-16">
        <div>
          <Item variant="outline" className="border-0" size="sm" asChild>
            <a href="https://github.com/ibb2/aether">
              <ItemContent>
                <ItemTitle>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Aether (Note Taking App)
                  </h3>
                </ItemTitle>
                <ItemDescription>
                  Created using Next.js, React, Typescript, and Tailwind CSS,
                  and deployed on Vercel.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ArrowUpRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
          <p className="leading-7 [&:not(:first-child)]:mt-6 font-medium">
            Aether is a note-taking web app inspired by Notion and OneNote,
            blending block-based editing with ink and stylus support. Built with
            Next.js, React, TypeScript, and Tailwind CSS, and deployed on
            Vercel, Aether is an open-source project that strengthened my
            understanding of full-stack development — from responsive UI design
            to data persistence, authentication, and payments.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Full-stack web app with PostgreSQL for data sync and persistance
            </li>
            <li>BetterAuth for authentication and Stripe for payments</li>
            <li>E2EE and S3 for secure storage</li>
            <li>Designed for responsive, fluid user experience.</li>
          </ul>
        </div>
        <div>
          <Item variant="outline" className="border-0" size="sm" asChild>
            <a href="https://github.com/ibb2/pMusic">
              <ItemMedia>{/*<BadgeCheckIcon className="size-5" />*/}</ItemMedia>
              <ItemContent>
                <ItemTitle>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    pMusic
                  </h3>
                </ItemTitle>
                <ItemDescription>
                  A desktop music client for Plex that allows users to play
                  music from their Plex library.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ArrowUpRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
          <p className="leading-7 [&:not(:first-child)]:mt-6 font-medium">
            pMusic is a cross-platform desktop music client for Plex, built with
            C#, .NET, and Avalonia. It provides a lightweight, modern interface
            for browsing and playing music libraries with support for multiple
            audio formats and advanced playback controls.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Cross-platform via AvaloniaUI</li>
            <li>Persistent user data via EFCore and SQLite</li>
            <li>OAauth2 authentication and Plex API Integration</li>
            <li>Built with MVVM Architecture and LINQ Queries</li>
          </ul>
        </div>
        <div>
          <Item variant="outline" className="border-0" size="sm" asChild>
            <a href="https://github.com/ibb2/xedmail">
              <ItemMedia>{/*<BadgeCheckIcon className="size-5" />*/}</ItemMedia>
              <ItemContent>
                <ItemTitle>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    xedMail (WIP)
                  </h3>
                </ItemTitle>
                <ItemDescription>
                  A web based email client for Gmail, built with Next.js,
                  Typescript, React, Tailwind, FastAPI (Python), and .NET
                  (ASP.NET Minimal API)
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ArrowUpRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
          <p className="leading-7 [&:not(:first-child)]:mt-6 font-medium">
            xedMail (Work in Progress) is a web-based email client for Gmail,
            built using a microservice architecture with Next.js, TypeScript,
            React, Tailwind CSS, FastAPI (Python), and ASP.NET Minimal API. It
            features OAuth2 and Clerk authentication, interaction with Gmail’s
            IMAP API, and a responsive design optimized for cross-platform use.
            This project has deepened my understanding of building scalable,
            service-oriented applications and integrating multiple backends
            securely.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Microservice architecture with FastAPI and .NET</li>
            <li>Cross-platform and responsive design</li>
            <li>OAuth2 + Clerk authentication</li>
            <li>Interaction with Gmail IMAP API</li>
          </ul>
        </div>
        <div>
          <Item variant="outline" className="border-0" size="sm" asChild>
            <a href="#">
              <ItemMedia>{/*<BadgeCheckIcon className="size-5" />*/}</ItemMedia>
              <ItemContent>
                <ItemTitle>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    (More projects coming soon — currently exploring new ideas
                    in AI-assisted productivity tools.)
                  </h3>
                </ItemTitle>
              </ItemContent>
              <ItemActions>
                <ArrowUpRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
        </div>
      </div>
    </div>
  );
}
