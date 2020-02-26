import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "@emotion/styled"

const Icon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  color: #94a4ba;
  width: 2.5rem;
  height: 1rem;

  &:hover {
    color: #000;
  }
`

const Title = styled.span`
  display: none;
`

const SocialLink = ({ name, url, icon }) => {
  return (
    <Icon href={url} target="#">
      <FontAwesomeIcon icon={icon} />
      <Title>{name}</Title>
    </Icon>
  )
}

export default SocialLink
