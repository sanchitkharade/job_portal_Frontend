import { Menu, rem, Avatar, Switch } from '@mantine/core';
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../../Slices/UserSlice';
import { openBase64pdf } from '../../Services/Utilities';

const ProfileMenu=()=> {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((state:any)=>state.user)
  const [checked,setChecked] =useState(false);
  const [opened,setOpened] =useState(false);
  const handleLogout=()=>{
        dispatch(removeUser());
        navigate('/');
        window.location.reload();
      }
      const profile=useSelector((state:any)=>state.profile);
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
      <div className="flex items-center gap-2 cursor-pointer">
          <div className='xs-mx:hidden'>{user.name}</div>
          <Avatar src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.png"} alt="it's me" />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        <Link to="/profile">
        <Menu.Item leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}>
          Profile
        </Menu.Item>
        </Link>
        
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText style={{ width: rem(14), height: rem(14) }} />} onClick={()=>openBase64pdf(profile.resume)}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Switch checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)} size='md' color='dark.4' onLabel={<IconSun
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="yellow"
              />} offLabel={<IconMoonStars
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="cyan"
              />}/>
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item onClick={handleLogout}
          color="red"
          leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default ProfileMenu;