import { Countdown } from '../../components/Countdown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../templates/MainTemplate';

export interface Props {
  state: TaskStateModel;
  set_state: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home(props: Props) {
  return (
    <MainTemplate>
      <Countdown
        formattedSecondsRemaining={props.state.formattedSecondsRemaining}
      />
      <MainForm state={props.state} set_state={props.set_state} />
    </MainTemplate>
  );
}
