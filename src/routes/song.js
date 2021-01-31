import { Router } from 'express';
import { body, param } from 'express-validator';
import { songController } from '../controllers/songController';
import { token } from '../servicios/passport';
import { validar } from '../middlewares/validacion';

const router = Router();
router.get('/',token(),songController.allSongs);

router.post('/',[token(),
    body('id').not().exists().withMessage('No es necesario que proporcione un ID; este se asignará automáticamente')]
    ,validar,songController.addSong);

router.get('/:id',token(),songController.findSongById);

router.delete('/:id',token(),songController.deleteSongById);

router.put('/:id',[token(),body('id')
        .not().exists()
        .withMessage("No se puede modificar el id")],songController.editSong);

export default router;
