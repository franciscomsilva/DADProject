<?php

namespace App\Policies;

use App\MovementControllerAPI;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MovementsPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any movement controller a p i s.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the movement controller a p i.
     *
     * @param  \App\User  $user
     * @param  \App\MovementControllerAPI  $movementControllerAPI
     * @return mixed
     */
    public function view(User $user, MovementControllerAPI $movementControllerAPI)
    {
        //
    }

    /**
     * Determine whether the user can create movement controller a p i s.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    public function createIncome(User $user)
    {
        return $user->type === 'o' || $user->type === 'a';
    }

    /**
     * Determine whether the user can update the movement controller a p i.
     *
     * @param  \App\User  $user
     * @param  \App\MovementControllerAPI  $movementControllerAPI
     * @return mixed
     */
    public function update(User $user, MovementControllerAPI $movementControllerAPI)
    {
        //
    }

    /**
     * Determine whether the user can delete the movement controller a p i.
     *
     * @param  \App\User  $user
     * @param  \App\MovementControllerAPI  $movementControllerAPI
     * @return mixed
     */
    public function delete(User $user, MovementControllerAPI $movementControllerAPI)
    {
        //
    }

    /**
     * Determine whether the user can restore the movement controller a p i.
     *
     * @param  \App\User  $user
     * @param  \App\MovementControllerAPI  $movementControllerAPI
     * @return mixed
     */
    public function restore(User $user, MovementControllerAPI $movementControllerAPI)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the movement controller a p i.
     *
     * @param  \App\User  $user
     * @param  \App\MovementControllerAPI  $movementControllerAPI
     * @return mixed
     */
    public function forceDelete(User $user, MovementControllerAPI $movementControllerAPI)
    {
        //
    }
}
