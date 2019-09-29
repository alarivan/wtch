import React from "react"
import styled from "styled-components"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

interface Props {
  icon: IconDefinition
}

const SocialIcon: React.FC<Props> = ({ icon }): JSX.Element => {
  return <StyledIcon size="2x" icon={icon} color="#555" />
}

export default SocialIcon
