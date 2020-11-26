import { store } from 'react-notifications-component';

type Props = {
  title: string;
  message: string;
  type: 'success' | 'danger' | 'info' | 'default' | 'warning';
};

const createNotification = (props: Props): void => {
  store.addNotification({
    ...props,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });
};

const serverError = (): void => {
  createNotification({
    title: 'Server Error',
    message: 'Error while calling server interface application might not function properly.',
    type: 'danger',
  });
};

export { createNotification, serverError };
