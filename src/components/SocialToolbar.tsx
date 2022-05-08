import { Flex, Image } from '@chakra-ui/react'
import { A } from './A'

const SOCIAL = [
  {
    img: '/static-v2/social-telegram.svg',
    url: '#',
  },
  {
    img: '/static-v2/social-discord.svg',
    url: '#',
  },
  {
    img: '/static-v2/social-twitter.svg',
    url: '#',
  },
  {
    img: '/static-v2/social-reddit.svg',
    url: '#',
  },
  {
    img: '/static-v2/social-ytb.svg',
    url: '#',
  },
]
export default function SocialToolbar() {
  return (
    <Flex className="items-center">
      {SOCIAL.map((item, idx) => (
        <A key={idx} url={item.url}>
          <Image key={idx} src={item.img} className="mr-3" />
        </A>
      ))}
    </Flex>
  )
}
