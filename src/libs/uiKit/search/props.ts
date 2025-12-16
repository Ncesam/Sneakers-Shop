
export interface SearchProps {
  withVoice?: boolean
  withFilter?: boolean
  onComplete?: (text: string) => void;
  onChangeText?: (text: string) => void;
}
