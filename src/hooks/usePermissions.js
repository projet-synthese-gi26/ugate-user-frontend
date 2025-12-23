import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';

export const usePermissions = () => {
    const { user, loading } = useContext(UserContext);

    const hasPermission = (permissionName) => {
        if (loading || !user || !user.permissions) {
            return false;
        }
        // Allows for wildcard permissions like 'syndicat:*'
        const userPermissions = user.permissions;
        if (userPermissions.includes(permissionName)) {
            return true;
        }
        const parts = permissionName.split(':');
        if (parts.length === 3) {
            const [service, object] = parts;
            if (userPermissions.includes(`${service}:${object}:*`) || userPermissions.includes(`${service}:*:*`)) {
                return true;
            }
        }
        return false;
    };

    const hasRole = (roleName) => {
        if (loading || !user || !user.roles) {
            return false;
        }
        return user.roles.includes(roleName);
    };

    return { user, loading, hasPermission, hasRole };
};
