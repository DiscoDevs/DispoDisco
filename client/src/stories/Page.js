import React from "react";
import styled from "styled-components";
import { Cargo, Direct, Kutsche, Primary } from "./Badge.stories";

import { HeaderMenus } from "./Header.stories";
import "./page.css";

const Wrapper = styled.div`
  background-color: var(--white);
`;

export const Page = () => (
  <Wrapper>
    <article>
      <HeaderMenus />
      <Primary label={"Badge"} />
      <Cargo type={"cargo"} label={"Cargo"} />
      <Direct type={"direct"} label={"Direkt"} />
      <Kutsche type={"kutsche"} label={"Kutsche"} />
      <section>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        recusandae deleniti, dolorem et quisquam consequatur odit consequuntur
        reprehenderit nobis dicta eaque nihil nulla magni. Quo, laudantium. Aut,
        qui temporibus eius et assumenda quisquam illum nesciunt doloribus
        voluptates blanditiis ipsam natus ratione dignissimos pariatur ut
        officia laboriosam eaque eos fugiat quod enim aspernatur id consequatur.
        Dignissimos excepturi saepe consequuntur fuga sit nam mollitia. Quam
        maxime odio quo similique assumenda excepturi magnam totam fugiat, unde,
        cum sint dolorum eaque dicta numquam aspernatur magni corrupti ratione.
        Esse consectetur alias assumenda voluptates qui aperiam ipsam vel optio
        in nesciunt. Adipisci deserunt laudantium corporis perspiciatis quidem
        necessitatibus placeat cupiditate delectus, architecto excepturi
        voluptas enim molestiae ad nihil voluptate, cum mollitia voluptatum?
        Delectus consequatur neque dignissimos culpa voluptatem. Fugit, iure
        provident? Aliquid, voluptates ut? Eius sed cumque expedita perspiciatis
        sunt, excepturi quasi in, molestiae corporis dignissimos vitae
        laudantium esse quae fugiat autem odio. Accusantium minus, nemo delectus
        incidunt consectetur voluptatum necessitatibus iste velit. Non quidem
        rem commodi eum corporis totam aliquam nemo quod ad, voluptas delectus
        nostrum in animi, error perspiciatis obcaecati doloribus? Ullam ea
        aliquid amet modi soluta nostrum officia sint dolor iure sequi labore
        aut quibusdam quae suscipit alias voluptate, inventore veritatis
        assumenda? Illum.
      </section>
    </article>
  </Wrapper>
);
