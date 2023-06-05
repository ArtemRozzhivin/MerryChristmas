import React from 'react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();
  //Панель, що дустопна лише для Адміну

  const onAddPerson = () => {
    navigate('/admin/addPerson');
  };

  const onDeletePerson = () => {
    navigate('/admin/deletePerson');
  };

  return (
    <div className="p-5 h-full">
      <h2 className="text-app text-2xl text-center mb-5">Адмін панель</h2>

      <div className="flex flex-col gap-10">
        <div className="flex gap-5 justify-center">
          <Button onClick={onAddPerson}>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>

              <h4>Додати персонажа</h4>
            </div>
          </Button>
          <Button onClick={onDeletePerson}>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
              </svg>

              <h4>Видалити персонажа</h4>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
