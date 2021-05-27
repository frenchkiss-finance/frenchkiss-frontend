import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from '@frenchkiss-libs/uikit'

const StyledAnnouncementCard = styled(Card)`
  background-image: url('/images/kiss-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`


const KissAnnouncement = () => {

    useEffect(() => {
        const script = document.createElement("script")
        script.setAttribute("src", "https://platform.twitter.com/widgets.js")
        script.setAttribute("async", "")
        document.body.appendChild(script)
    }, [])
  return (
    <StyledAnnouncementCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Announcements 
        </Heading>
        <Block>
            <a className="twitter-timeline" data-lang="en" data-theme="dark" href="https://twitter.com/frenchkiss_fin?ref_src=twsrc%5Etfw"><p style={{display:"none"}}>s</p></a>
        </Block>
      </CardBody>
    </StyledAnnouncementCard>
  )
}

export default KissAnnouncement

// const KissAnnouncement: React.FC = () => {
//   return (
//     <>
//         <a className="twitter-timeline" href="https://twitter.com/frenchkiss_fin?ref_src=twsrc%5Etfw">Tweets by frenchkiss_fin</a> 
//         <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
//     </>
//   )
// }

// export default KissAnnouncement
