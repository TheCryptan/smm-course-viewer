/**
 * @module Object
 * This class is a struct for course objects.
 * 
 * @author Leonardo Mauro <leo.mauro.desenv@gmail.com> (http://leonardomauro.com/)
 * @link https://github.com/leomaurodesenv/smm-course-viewer GitHub
 * @license https://opensource.org/licenses/GPL-3.0 GNU Public License (GPLv3)
 * @copyright 2019 Leonardo Mauro
 * @package smm-course-viewer
 * @access public
 */
class Object {
 
    /**
     * @method module:Object
     * Constructor of class
     * @var {Integer} x                 Axis-x position
     * @var {Integer} z                 Axis-x position
     * @var {Integer} y                 Axis-x position
     * @var {Integer} width             Width
     * @var {Integer} height            Height
     * @var {Integer} flags             Unknow -
     * @var {Integer} childFlags        Unknow -
     * @var {Integer} extendedData      Unknow -
     * @var {Integer} type              Type
     * @var {Integer} childType         Child type
     * @var {Integer} linkId            to Pipes and Rails
     * @var {Integer} effect            Effect
     * @var {Integer} transform         Tranformation
     * @var {Integer} childTransform    Child tranformation
     * @instance
     * @access public
     * @return {this}
     */
    constructor(_x, _z, _y, _width, _height, _flags, _childFlags, _extendedData,
                _type, _childType, _linkId, _effect, _transform, _childTransform) {
        this.x = _x;
        this.z = _z;
        this.y = _y;
        this.width = _width;
        this.height = _height;
        this.flags = _flags;
        this.childFlags = _childFlags;
        this.extendedData = _extendedData;
        this.type = _type;
        this.childType = _childType;
        this.linkId = _linkId;
        this.effect = _effect;
        this.transform = _transform;
        this.childTransform = _childTransform;
    }


}   