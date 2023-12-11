import { Box, Heading, Icon, Tooltip } from "@chakra-ui/react";
import { CiMedal } from "react-icons/ci";

export default function AccountAchievements() {
  return (
    <Box marginTop={4}>
      <Heading size='xs'>Achievments</Heading>
      <Box display='flex'>
        <Tooltip label="Achievement">
          <Box>
            <Icon as={CiMedal} w={6} h={6} color='red.300'/>
          </Box>
        </Tooltip>
        <Tooltip label="Achievement2">
          <Box>
            <Icon as={CiMedal} w={6} h={6} color='purple.300'/>
          </Box>
        </Tooltip>
        <Tooltip label="Achievement3">
          <Box>
            <Icon as={CiMedal} w={6} h={6} color=' black.300'/>
          </Box>
        </Tooltip>
        <Tooltip label="Achievement4">
          <Box>
            <Icon as={CiMedal} w={6} h={6} color=' green.300'/>
          </Box>
        </Tooltip>
      </Box>
  </Box>
  )
}