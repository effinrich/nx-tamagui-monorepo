import { useToastController } from '@tamagui/toast'
import { Button, H4, XStack, YStack } from 'tamagui'

export const ToastControl = () => {
  const toast = useToastController()

  return (
    <YStack gap="$2" alignItems="center">
      <H4>Toast demo</H4>
      <XStack gap="$2" justifyContent="center">
        <Button
          onPress={() => {
            toast.show('Successfully saved!', {
              message: "Don't worry, we've got your data."
            })
          }}
        >
          Show
        </Button>
        <Button
          onPress={() => {
            toast.hide()
          }}
        >
          Hide
        </Button>
      </XStack>
    </YStack>
  )
}
