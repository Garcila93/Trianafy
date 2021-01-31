import { Router } from 'express';
import { body } from 'express-validator';
import {playListController} from '../controllers/playListController';
import { token } from '../servicios/passport';
import { validar } from '../middlewares/validacion';

const router = Router();

router.get('/',token(),playListController.allList);

router.get('/:id',token(),playListController.getDescriptionById);

router.post('/',[token(),body('id').not().exists().withMessage('No es necesario que proporcione un ID; este se asignará automáticamente')],validar,playListController.addList);

router.delete('/:id',token(),playListController.deletePlayList);

router.put('/:id',[token(),body('id').not().exists().withMessage('No es necesario que proporcione un ID; este se asignará automáticamente')],validar,playListController.updateList);

router.get('/:id/songs',token(),playListController.getSongFromList);

router.post('/:idList/songs/:idSong',token(),playListController.addSongToPlaylist);

router.get('/:idList/songs/:idSong',token(),playListController.getSongFromList);

router.delete('/:idList/songs/:idSong',token(),playListController.deleteSongFromList);

export default router;