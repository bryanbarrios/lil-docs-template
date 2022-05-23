import { FC } from "react";
import {
  Box,
  BoxProps,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Section } from "@/components/section";
import Marquee from "react-fast-marquee";
import { TweetData } from "@/types";
import Tweet from "./Tweet";

interface TweetsProps extends BoxProps {}

const tweets: TweetData[] = [
  {
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    author: {
      name: "Guillermo Rauch",
      bio: "Vercel CEO.",
      avatar:
        "https://pbs.twimg.com/profile_images/1450115233205272576/CFTTK-0I_400x400.jpg",
    },
    url: "https://twitter.com/rauchg",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    author: {
      name: "Lee Robinson",
      bio: "Developer Relations at Vercel.",
      avatar:
        "https://pbs.twimg.com/profile_images/1194080814688079872/6qhYKGKC_400x400.jpg",
    },
    url: "https://twitter.com/leeerob",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    author: {
      name: "Paco Coursey",
      bio: "Crafting interfaces @linear.",
      avatar:
        "https://pbs.twimg.com/profile_images/1466178823171588103/yM7OJ5XP_400x400.jpg",
    },
    url: "https://twitter.com/pacocoursey",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
    author: {
      name: "Brian Lovin",
      bio: "Designing mobile apps @github",
      avatar:
        "https://pbs.twimg.com/profile_images/1217652661962661888/WfiUNjzP_400x400.jpg",
    },
    url: "https://twitter.com/brian_lovin",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    author: {
      name: "Segun Adebayo",
      bio: "Creator of Chakra UI.",
      avatar:
        "https://pbs.twimg.com/profile_images/1430792349974548485/yPCbNKr8_400x400.jpg",
    },
    url: "https://twitter.com/thesegunadebayo",
  },
  {
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    author: {
      name: "Pedro Duarte",
      bio: "UI/DX @rainbowdotme.",
      avatar:
        "https://pbs.twimg.com/profile_images/1518360692365082624/SlnFrH3b_400x400.jpg",
    },
    url: "https://twitter.com/peduarte",
  },
  {
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
    author: {
      name: "Kent C. Dodds",
      bio: "Improving the world with quality software.",
      avatar:
        "https://pbs.twimg.com/profile_images/1526973250667810816/4FDvmwD0_400x400.jpg",
    },
    url: "https://twitter.com/kentcdodds",
  },
];

const Tweets: FC<TweetsProps> = (props) => {
  const [r, g, b] = useColorModeValue([255, 255, 255], [26, 32, 43]);
  const gradientWidth = useBreakpointValue({ base: 100, md: 200 });

  return (
    <Box {...props}>
      <Section
        title="Loved by communities"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed consequatur."
      />
      <Box
        as={Marquee}
        gradientColor={[r, g, b]}
        gradientWidth={gradientWidth}
        speed={30}
        pauseOnHover
      >
        {tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} mr="3" />
        ))}
      </Box>
    </Box>
  );
};

export default Tweets;
