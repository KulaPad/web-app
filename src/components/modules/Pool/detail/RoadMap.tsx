import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps'

const steps = [
  { label: 'Preparation', description: 'This project is in preparation phase. Stay tuned.' },
  { label: 'Preparation', description: 'This project is in preparation phase. Stay tuned.' },
  { label: 'Preparation', description: 'This project is in preparation phase. Stay tuned.' },
  { label: 'Preparation', description: 'This project is in preparation phase. Stay tuned.' },
]
interface RoadMapProps {}
export default function RoadMap(props: RoadMapProps) {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <Box bg="var(--neutral-dark-2)" className="flex rounded-[24px] h-full px-[20px] py-[24px]">
      <Box>
        <Steps orientation="vertical" activeStep={activeStep}>
          {steps.map(({ label, description }, index) => (
            <Step
              width="100%"
              label={<Representation label={label} description={description} />}
              key={label}
            ></Step>
          ))}
        </Steps>
      </Box>
    </Box>
  )
}

const Representation = ({ label, description }: { label: string; description: string }) => (
  <div>
    <Text color="var(--neutral-dark-6)" className="text-left font-bold">
      {label}
    </Text>
    <Text color="var(--neutral-dark-6)" className="text-left">
      {description}
    </Text>
  </div>
)
