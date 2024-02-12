import { Modal, TextButton, User } from 'awesome-gcl';
// import moment from 'moment';
import { useSideMenu } from './logic';

export const SideMenu = () => {
  const hook = useSideMenu();

  return (
    <div className="flex flex-col h-screen w-[300px] border-e border-solid border-grayscale-10 px-3">
      <div className="flex justify-between w-full pt-2">
        <TextButton
          type="button"
          size="medium"
          theme="primary"
          handleClick={() => hook.handleGoHomePage()}
          name="home button"
          value="clicked"
          additionalClasses={{
            button: ['flex justify-start items-center gap-[10px] hover:border-0'],
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99999 22C5.34314 22 3.99999 20.6569 3.99999 19V13H2.99999C2.10909 13 1.66292 11.9229 2.29288 11.2929L11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C22.3371 11.9229 21.8909 13 21 13H20V19C20 20.6569 18.6568 22 17 22H6.99999ZM12 4.41421L5.3509 11.0633C5.73009 11.2054 5.99999 11.5712 5.99999 12V19C5.99999 19.5523 6.44771 20 6.99999 20L8.99999 19.999L8.99999 16C8.99999 14.8954 9.89542 14 11 14H13C14.1046 14 15 14.8954 15 16L15 19.999L17 20C17.5523 20 18 19.5523 18 19V12C18 11.5712 18.2699 11.2054 18.6491 11.0633L12 4.41421ZM13 16H11L11 19.999H13L13 16Z" fill="#2F80ED" />
          </svg>
          STR PERMIT
        </TextButton>
        <button
          onClick={() => hook.toggleModal()}
          className='flex items-center justify-center bg-grayscale-5 border-0 rounded-md relative p-[12px]'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00001 20C4.29575 20 3.82474 19.2979 4.05979 18.6586L4.10558 18.5528L5.261 16.242C5.69839 15.3672 5.94708 14.4115 5.99244 13.4369L6.00001 13.1115L6.00001 10C6.00001 7.02694 8.16239 4.55893 11.0002 4.08293L11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13.0008 4.08309C15.7593 4.54627 17.8794 6.89172 17.995 9.75347L18 10L18 13.1115C18 14.0895 18.205 15.0555 18.6002 15.9474L18.739 16.242L19.8944 18.5528C20.2094 19.1827 19.792 19.918 19.1151 19.9936L19 20H14C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20H5.00001ZM12 6C9.85781 6 8.10893 7.68397 8.0049 9.80036L8.00001 10L8.00001 13.1115C8.00001 14.3922 7.72666 15.6569 7.19981 16.8213L7.04985 17.1364L6.61804 18L17.382 18L16.9502 17.1364C16.3774 15.9908 16.0563 14.7374 16.0068 13.4603L16 13.1115L16 10C16 7.79086 14.2091 6 12 6Z" fill="#202532" />
          </svg>
          {/* {hook.newNotification && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='absolute top-2 right-2'>
              <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#F2F2F3" stroke-width="2" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#DE1C22" />
            </svg>
          )} */}
        </button>
      </div>
      <div className="w-full h-3/4 pt-20 pb-8">
        <button
          onClick={hook.handleGoHomePage}
          className='flex items-center justify-start gap-[12px] w-full bg-grayscale-5 border-0 text-sm font-semibold px-[16px] py-[12px] rounded-md'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5C4 3.34315 5.34315 2 7 2H14ZM11.999 4H7C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V10H13C12.4872 10 12.0645 9.61396 12.0067 9.11662L12 9L11.999 4ZM17.586 8L13.999 4.414L14 8H17.586Z" fill="#50545E" />
          </svg>
          STR Applications
        </button>
      </div>
      <button
        onClick={hook.handleLogout}
        className='flex items-center justify-start gap-[12px] w-full bg-grayscale-5 border-0 text-sm font-semibold px-[16px] py-[12px] rounded-md'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8.625 18.4286C8.95312 18.4286 9.22266 18.5491 9.43359 18.7902C9.64453 19.0312 9.75 19.3393 9.75 19.7143C9.75 20.0893 9.64453 20.3973 9.43359 20.6384C9.22266 20.8795 8.95312 21 8.625 21H6.375C5.41406 20.9732 4.61719 20.5982 3.98438 19.875C3.35156 19.1518 3.02344 18.2411 3 17.1429V6.85714C3.02344 5.75893 3.35156 4.84821 3.98438 4.125C4.61719 3.40179 5.41406 3.02679 6.375 3H8.625C8.95312 3 9.22266 3.12054 9.43359 3.36161C9.64453 3.60268 9.75 3.91071 9.75 4.28571C9.75 4.66071 9.64453 4.96875 9.43359 5.20982C9.22266 5.45089 8.95312 5.57143 8.625 5.57143H6.375C6.04688 5.57143 5.77734 5.69196 5.56641 5.93304C5.35547 6.17411 5.25 6.48214 5.25 6.85714V17.1429C5.25 17.5179 5.35547 17.8259 5.56641 18.067C5.77734 18.308 6.04688 18.4286 6.375 18.4286H8.625ZM20.6836 11.0759C20.8945 11.3438 21 11.6518 21 12C21 12.3482 20.8945 12.6562 20.6836 12.9241L16.1836 18.067C15.9492 18.308 15.6797 18.4286 15.375 18.4286C15.0703 18.4286 14.8008 18.308 14.5664 18.067C14.3555 17.7991 14.25 17.4911 14.25 17.1429C14.25 16.7946 14.3555 16.4866 14.5664 16.2188L17.168 13.2857H9.75C9.42188 13.2857 9.15234 13.1652 8.94141 12.9241C8.73047 12.683 8.625 12.375 8.625 12C8.625 11.625 8.73047 11.317 8.94141 11.0759C9.15234 10.8348 9.42188 10.7143 9.75 10.7143H17.168L14.5664 7.78125C14.3555 7.51339 14.25 7.20536 14.25 6.85714C14.25 6.50893 14.3555 6.20089 14.5664 5.93304C14.8008 5.69196 15.0703 5.57143 15.375 5.57143C15.6797 5.57143 15.9492 5.69196 16.1836 5.93304L20.6836 11.0759Z" fill="#50545E" />
        </svg>
        Log Out
      </button>
      <User
        size="large"
        firstName={hook.hookCacheContextState.user.name.split(' ')[0] || ''}
        lastName={hook.hookCacheContextState.user.name.split(' ')[1] || ''}
        description={hook.hookCacheContextState.user.email}
        additionalClasses={{
          wrapper: ['py-8'],
        }}
      />
    </div>
  );
};
