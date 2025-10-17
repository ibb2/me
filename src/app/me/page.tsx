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
    <div className="flex flex-col gap-y-4">
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am a recent Information Technology graduate from Monash University,
          Melbourne, Australia. with experience working in a team to deliver a
          live project. Skilled in agile methodologies and collaborative
          development, with a solid foundation in end-to-end project management.
          Seeking an entry role in software engineering where I can bring my
          technical, and collaborative skills, as well as my problem-solving
          abilities, and love for technology to deliver high quality products
          and solutions.
        </p>
      </div>
      <div>
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Personal Projects
          </h2>
        </div>
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
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm">
            Aether is a note-taking application that allows users to create,
            edit, and organize notes. A mix between Notion and OneNote, this
            project aims to blend the best features of both - A block based
            editor and ink and stylus support. It is built using Next.js, React,
            Typescript, and Tailwind CSS, and deployed on Vercel. This project
            is open-sourced. It has taught me a lot about building full stack
            web applications, responsive design, persisting and syncing user
            data with PostgreSQL and SQLite, implementing user authentication
            with BetterAuth and payments with Stripe. As well as learning more
            about E2EE as well as S3.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-sm">
            <li>Full stack web application</li>
            <li>Responsive design</li>
            <li>Persist and sync user data with PostgreSQL and SQLite</li>
            <li>
              Implement user authentication with BetterAuth and payments with
              Stripe
            </li>
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
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm">
            Built using C#, .NET, and Avalonia. This project was developed to
            provide a more user-friendly and customizable experience for Plex
            users who want to play music from their library. The application
            features a modern and intuitive interface, allowing users to easily
            browse and play their music collection. It also supports various
            audio formats and offers advanced playback controls. The application
            is designed to be lightweight and fast, ensuring a smooth and
            enjoyable music listening experience.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-sm">
            <li>C# and .NET</li>
            <li>Cross Platform</li>
            <li>User data persistance via EFCore and SQLite</li>
            <li>OAauth2 Authentication flow</li>
            <li>Interaction with 3rd party API</li>
            <li>MVVM Architecture</li>
            <li>Linq Queries</li>
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
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm">
            A web application with external API and microservice architecture,
            built with Next.js, Typescript, React, Tailwind, FastAPI (Python),
            and .NET (ASP.NET Minimal API). It features a responsive design,
            cross-platform compatibility, Authentication with Clerk and custom
            OAauth2 Authentication flow, as well as interaction with 3rd party
            IMAP API. This project has given me a deeper understanding of
            microservice architecture and how to build a scalable and
            maintainable application. It has also taught me how to use OAuth2
            authentication flow and how to interact with third-party APIs.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-sm">
            <li>Web Application with External API and Microservice</li>
            <li>Cross Platform via the Web</li>
            <li>OAauth2 Authentication flow and Clerk</li>
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
                    Placeholder for next project
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
