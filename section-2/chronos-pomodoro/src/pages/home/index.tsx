import { Countdown } from '../../components/Countdown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../templates/MainTemplate';

interface Props {
  state: TaskStateModel;
  set_state: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home(props: Props) {
  return (
    <MainTemplate>
      <Countdown />
      <MainForm />
    </MainTemplate>
  );
}
