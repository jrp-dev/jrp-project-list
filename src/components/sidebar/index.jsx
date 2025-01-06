import React from 'react';
import { List, ListItem, ListItemText, Box, Drawer, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useViewModel from './use-view-model';
import MenuIcon from '@mui/icons-material/Menu';

export function MobileDrawer({ projects }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {projects?.map((project) => (
          <ListItem key={project.id} button component={Link} to={`/projects/${project.id}`}>
            <ListItemText primary={project.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <aside className="w-auto border-r-2 h-full">
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </aside>
  );
}

export const Sidebar = () => {
  const { projects } = useViewModel();

  if (!projects) return null;

  return (
    <>
      <div className="block md:hidden h-full">
        <MobileDrawer projects={projects} />
      </div>
      <div className="hidden md:block">
        <aside className="w-[var(--sidebar-width)] border-r-2 h-full">
          <nav>
            <h4 className="text-xl font-bold p-4 pb-0">Favorite Projects</h4>
            <List>
              {projects?.map((project) => (
                <ListItem key={project.id} button component={Link} to={`/projects/${project.id}`}>
                  <ListItemText primary={project.name} />
                </ListItem>
              ))}
            </List>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
