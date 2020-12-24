System.register(["cce.code-quality.cr", "cc", "../../../Common/Game/MyComponent.js", "./Floor.js", "./FloorType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Node, Prefab, Vec3, _decorator, MyComponent, Floor, FloorType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp, _crd, ccclass, property, FloorManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloor(extras) {
    _reporterNs.report("Floor", "./Floor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloorType(extras) {
    _reporterNs.report("FloorType", "./FloorType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_FloorJs) {
      Floor = _FloorJs.Floor;
    }, function (_FloorTypeJs) {
      FloorType = _FloorTypeJs.FloorType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05d54UF3sRLvYPRcXaYLvPz", "FloorMananger", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FloorManager", FloorManager = (_dec = ccclass('FloorManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_ref) {
        _inheritsLoose(FloorManager, _ref);

        function FloorManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "floorPrefabs", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Camera", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Player", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "allFloors", []);

          _defineProperty(_assertThisInitialized(_this), "type", "level");

          _defineProperty(_assertThisInitialized(_this), "randomIndex", 0);

          _defineProperty(_assertThisInitialized(_this), "lastNode", null);

          _defineProperty(_assertThisInitialized(_this), "lastFloorType", (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
            error: Error()
          }), FloorType) : FloorType).FRONT);

          _defineProperty(_assertThisInitialized(_this), "frontNumber", 0);

          _defineProperty(_assertThisInitialized(_this), "movespeed", 5);

          _defineProperty(_assertThisInitialized(_this), "moveSpeedx", 0);

          _defineProperty(_assertThisInitialized(_this), "moveSpeedz", 0);

          _defineProperty(_assertThisInitialized(_this), "nowFloorIndex", 0);

          _defineProperty(_assertThisInitialized(_this), "cameraAngle", 0);

          return _this;
        }

        var _proto = FloorManager.prototype;

        _proto.onLoad = function onLoad() {
          FloorManager.I = this.node.getComponent(FloorManager);
        };

        _proto.Init = function Init() {// this.CreateFloorForJson(this.data);
        };

        _proto.CreateFloor = function CreateFloor(FloorID) {
          for (var i = 0; i < this.floorPrefabs.length; i++) {
            var element = this.floorPrefabs[i].data.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
              error: Error()
            }), Floor) : Floor);

            if (element.ID == FloorID) {
              var floor = instantiate(this.floorPrefabs[i]);
              this.allFloors.push(floor.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
                error: Error()
              }), Floor) : Floor));
              return floor;
            }
          }

          console.error("创建地板失败,不存在ID为:", FloorID, "的地板,请检查后重试!");
          return null;
        };

        _proto.CreateFloorForJson = function CreateFloorForJson(json) {
          // json = this.data;
          var node = this.node;

          for (var i = 0; i < json.floorData.length; i++) {
            var element = json.floorData[i];
            var id = Number(element) + 10000;
            var floorNode = this.CreateFloor(id);

            if (floorNode) {
              var type = this.SetNewFloorTypeData(floorNode, json, i);

              if (i == 0) {
                floorNode.setWorldPosition(0, 0, 0);
                this.lastNode = floorNode;
              } else {
                this.SetFloorNodePosition(type, floorNode);
              }

              node.addChild(floorNode);
            }
          }
        };

        _proto.CreateFloorForRandom = function CreateFloorForRandom() {
          // json = this.data;
          var node = this.node;
          var floorNode;
          var floor = {
            floorType: (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT
          };

          if (this.randomIndex <= 5) {
            var id = Number(1) + 10000;
            floorNode = this.CreateFloor(id);
            floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT;
          } else {
            var _id = Number(1) + 10000;

            floorNode = this.CreateFloor(_id);

            if (this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT) {
              if (this.frontNumber >= 5 && Math.random() < 0.2) {
                this.frontNumber = 0;
                if (Math.random() < 0.5) floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT;else floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT;
              } else {
                this.frontNumber++;
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
              }
            } else if (this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).LEFT || this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).RIGHT) {
              if (this.frontNumber >= 5 && Math.random() < 0.2) {
                this.frontNumber = 0;
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
              } else {
                this.frontNumber++;
                floor.floorType = this.lastFloorType;
              }
            }
          }

          if (floorNode) {
            var f = floorNode.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
              error: Error()
            }), Floor) : Floor);
            f.floorType = floor.floorType;
            this.lastFloorType = floor.floorType;

            if (this.randomIndex == 0) {
              floorNode.setWorldPosition(0, 0, 0);
              this.lastNode = floorNode;
            } else {
              this.SetFloorNodePosition(floor.floorType, floorNode);
            }

            node.addChild(floorNode);
            this.randomIndex++;
          }
        };

        _proto.SetFloorNodePosition = function SetFloorNodePosition(type, floorNode) {
          if (!this.lastNode) return;

          switch (type) {
            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x, 0, this.lastNode.worldPosition.z - 3);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).BACK:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x, 0, this.lastNode.worldPosition.z + 3);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).LEFT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x - 3, 0, this.lastNode.worldPosition.z);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).RIGHT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x + 3, 0, this.lastNode.worldPosition.z);
              break;

            default:
              break;
          }

          this.lastNode = floorNode;
        }
        /**创建时根据json数据设置新地板的方向属性 */
        ;

        _proto.SetNewFloorTypeData = function SetNewFloorTypeData(floorNode, json, i) {
          var floor = floorNode.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
            error: Error()
          }), Floor) : Floor);

          if (floor) {
            switch (json.floorDirectionData[i]) {
              case '1':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
                break;

              case '2':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).BACK;
                break;

              case '3':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT;
                break;

              case '4':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT;
                break;

              default:
                throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
            }

            return floor.floorType;
          }

          throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
        };

        _proto.RemoveFloor = function RemoveFloor() {
          this.allFloors[0].node.destroy();
          this.allFloors.splice(0, 1);
        };

        _proto.onUpDate = function onUpDate(dt) {
          this.MoveFloor(dt);
        };

        _proto.MoveFloor = function MoveFloor(dt) {
          var _this$Camera, _this$Camera2, _this$Player;

          if (!this.allFloors[this.nowFloorIndex]) return;

          if (!this.allFloors[this.nowFloorIndex].IsNowFloor()) {
            if (this.type == "endlessMode") {
              if (this.nowFloorIndex == 5) this.RemoveFloor();else {
                this.nowFloorIndex++;
              } // if (this.nowFloorIndex > 2) {
              // this.nowFloorIndex = 2;
              // }

              this.CreateFloorForRandom();
            } else {
              this.nowFloorIndex++;
            } // if (this.nowFloorIndex == 1)
            // this.nowFloorIndex--;

          } //若下个结点存在 并且与当前结点的类型不同


          if (this.allFloors[this.nowFloorIndex] && this.allFloors[this.nowFloorIndex + 1]) {
            if (this.nowFloorIndex + 1 < this.allFloors.length && this.allFloors[this.nowFloorIndex + 1].floorType != this.allFloors[this.nowFloorIndex].floorType) {
              //应该转向
              if (Vec3.distance(this.allFloors[this.nowFloorIndex].node.worldPosition, new Vec3(0, 0, 0)) < 0.1) {
                switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).FRONT:
                    this.MoveFront();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).BACK:
                    this.MoveBack();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).LEFT:
                    this.MoveLeft();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).RIGHT:
                    this.MoveRight();
                    break;

                  default:
                    this.MoveStop();
                    break;
                }
              }
            } //转摄像头


            switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).FRONT:
                this.cameraAngle = 0;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).BACK:
                this.cameraAngle = 180;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).LEFT:
                this.cameraAngle = 90;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).RIGHT:
                this.cameraAngle = -90;
                break;
            }
          }

          var out = new Vec3(0, 0, 0);
          var angle = new Vec3(0, 0, 0);
          (_this$Camera = this.Camera) === null || _this$Camera === void 0 ? void 0 : _this$Camera.getWorldRotation().getEulerAngles(angle);
          Vec3.lerp(out, angle, new Vec3(0, this.cameraAngle, 0), 0.1); // console.log(angle);

          (_this$Camera2 = this.Camera) === null || _this$Camera2 === void 0 ? void 0 : _this$Camera2.setRotationFromEuler(out.x, out.y, out.z);
          (_this$Player = this.Player) === null || _this$Player === void 0 ? void 0 : _this$Player.setRotationFromEuler(out.x, out.y, out.z);

          for (var i = 0; i < this.allFloors.length; i++) {
            var element = this.allFloors[i];
            element.node.setWorldPosition(element.node.worldPosition.x + this.moveSpeedx * this.movespeed * dt, 0, element.node.worldPosition.z + this.moveSpeedz * this.movespeed * dt);
          }
        };

        _proto.startMove = function startMove() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 1;
        };

        _proto.MoveFront = function MoveFront() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 1;
        };

        _proto.MoveBack = function MoveBack() {
          this.moveSpeedx = 0;
          this.moveSpeedz = -1;
        };

        _proto.MoveLeft = function MoveLeft() {
          this.moveSpeedx = 1;
          this.moveSpeedz = 0;
        };

        _proto.MoveRight = function MoveRight() {
          this.moveSpeedx = -1;
          this.moveSpeedz = 0;
        };

        _proto.MoveStop = function MoveStop() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 0;
        };

        return FloorManager;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _defineProperty(_class3, "I", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "floorPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL0dhbWUvRG9vci9GbG9vck1hbmFuZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbnRpYXRlIiwiTm9kZSIsIlByZWZhYiIsIlZlYzMiLCJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJGbG9vciIsIkZsb29yVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkZsb29yTWFuYWdlciIsIkZST05UIiwib25Mb2FkIiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJJbml0IiwiQ3JlYXRlRmxvb3IiLCJGbG9vcklEIiwiaSIsImZsb29yUHJlZmFicyIsImxlbmd0aCIsImVsZW1lbnQiLCJkYXRhIiwiSUQiLCJmbG9vciIsImFsbEZsb29ycyIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJDcmVhdGVGbG9vckZvckpzb24iLCJqc29uIiwiZmxvb3JEYXRhIiwiaWQiLCJOdW1iZXIiLCJmbG9vck5vZGUiLCJ0eXBlIiwiU2V0TmV3Rmxvb3JUeXBlRGF0YSIsInNldFdvcmxkUG9zaXRpb24iLCJsYXN0Tm9kZSIsIlNldEZsb29yTm9kZVBvc2l0aW9uIiwiYWRkQ2hpbGQiLCJDcmVhdGVGbG9vckZvclJhbmRvbSIsImZsb29yVHlwZSIsInJhbmRvbUluZGV4IiwibGFzdEZsb29yVHlwZSIsImZyb250TnVtYmVyIiwiTWF0aCIsInJhbmRvbSIsIkxFRlQiLCJSSUdIVCIsImYiLCJ3b3JsZFBvc2l0aW9uIiwieCIsInoiLCJCQUNLIiwiZmxvb3JEaXJlY3Rpb25EYXRhIiwiRXJyb3IiLCJMZXZlbDEiLCJSZW1vdmVGbG9vciIsImRlc3Ryb3kiLCJzcGxpY2UiLCJvblVwRGF0ZSIsImR0IiwiTW92ZUZsb29yIiwibm93Rmxvb3JJbmRleCIsIklzTm93Rmxvb3IiLCJkaXN0YW5jZSIsIk1vdmVGcm9udCIsIk1vdmVCYWNrIiwiTW92ZUxlZnQiLCJNb3ZlUmlnaHQiLCJNb3ZlU3RvcCIsImNhbWVyYUFuZ2xlIiwib3V0IiwiYW5nbGUiLCJDYW1lcmEiLCJnZXRXb3JsZFJvdGF0aW9uIiwiZ2V0RXVsZXJBbmdsZXMiLCJsZXJwIiwic2V0Um90YXRpb25Gcm9tRXVsZXIiLCJ5IiwiUGxheWVyIiwibW92ZVNwZWVkeCIsIm1vdmVzcGVlZCIsIm1vdmVTcGVlZHoiLCJzdGFydE1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQ0EsTUFBQUEsVyxPQUFBQSxXO0FBQW1CQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQXVDQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVSxPQUFBQSxVOztBQUUvRkMsTUFBQUEsVyw0QkFBQUEsVzs7QUFHQUMsTUFBQUEsSyxZQUFBQSxLOztBQUNBQyxNQUFBQSxTLGdCQUFBQSxTOzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzhCQUdKQyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEMsVUFJSEMsUUFBUSxDQUFDUCxNQUFELEMsVUFFUk8sUUFBUSxDQUFDUixJQUFELEMsVUFFUlEsUUFBUSxDQUFDUixJQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztzRUFHWSxFOztpRUFFTixPOzt3RUFFTyxDOztxRUFFRSxJOzswRUFFUjtBQUFBO0FBQUEsc0NBQVVVLEs7O3dFQUVKLEM7O3NFQUVGLEM7O3VFQUVDLEM7O3VFQUVBLEM7OzBFQUVHLEM7O3dFQUVGLEM7Ozs7Ozs7ZUFFdEJDLE0sR0FBQSxrQkFBUztBQUNMRixVQUFBQSxZQUFZLENBQUNHLENBQWIsR0FBaUIsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCTCxZQUF2QixDQUFqQjtBQUNILFM7O2VBQ0RNLEksR0FBQSxnQkFBTyxDQUVIO0FBQ0gsUzs7ZUFFREMsVyxHQUFBLHFCQUFZ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LENBQTJCRSxDQUEzQixHQUFnQyxLQUFLK0IsVUFBTCxHQUFrQixLQUFLRCxTQUF2QixHQUFtQ3JCLEVBQTVLO0FBQ0g7QUFDSixTOztlQUNEdUIsUyxHQUFBLHFCQUFZO0FBQ1IsZUFBS0gsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSCxTOztlQUVEakIsUyxHQUFBLHFCQUFZO0FBQ1IsZUFBS2UsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSCxTOztlQUNEaEIsUSxHQUFBLG9CQUFXO0FBQ1AsZUFBS2MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBQyxDQUFuQjtBQUNILFM7O2VBQ0RmLFEsR0FBQSxvQkFBVztBQUNQLGVBQUthLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxlQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0gsUzs7ZUFDRGQsUyxHQUFBLHFCQUFZO0FBQ1IsZUFBS1ksVUFBTCxHQUFrQixDQUFDLENBQW5CO0FBQ0EsZUFBS0UsVUFBTCxHQUFrQixDQUFsQjtBQUNILFM7O2VBQ0RiLFEsR0FBQSxvQkFBVztBQUNQLGVBQUtXLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxlQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0gsUzs7Ozs7Ozs7OztpQkFuUndCLEU7Ozs7Ozs7aUJBRUgsSTs7Ozs7OztpQkFFQSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0NDbGFzcywgZGlyZWN0b3IsIEVudW0sIGluc3RhbnRpYXRlLCBtYXRoLCBOb2RlLCBQcmVmYWIsIFF1YXQsIFN5c3RlbSwgc3lzdGVtRXZlbnQsIHYzLCBWZWMzLCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XG5pbXBvcnQgeyBERUJVRywgRURJVE9SIH0gZnJvbSBcImNjZS5lbnZcIjtcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBEb29yIH0gZnJvbSBcIi4vRG9vclwiO1xuaW1wb3J0IHsgRG9vclR5cGUgfSBmcm9tIFwiLi9Eb29yVHlwZVwiO1xuaW1wb3J0IHsgRmxvb3IgfSBmcm9tIFwiLi9GbG9vclwiO1xuaW1wb3J0IHsgRmxvb3JUeXBlIH0gZnJvbSBcIi4vRmxvb3JUeXBlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdGbG9vck1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIEZsb29yTWFuYWdlciBleHRlbmRzIE15Q29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBJOiBGbG9vck1hbmFnZXI7XG4gICAgQHByb3BlcnR5KFByZWZhYilcbiAgICBmbG9vclByZWZhYnM6IFByZWZhYltdID0gW107XG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgQ2FtZXJhOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgUGxheWVyOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgLyoq5omA5pyJ55qE5Zyw5p2/ICovXG4gICAgYWxsRmxvb3JzOiBGbG9vcltdID0gW107XG4gICAgLyoq5ri45oiP5qih5byPICovXG4gICAgdHlwZTogc3RyaW5nID0gXCJsZXZlbFwiO1xuICAgIC8qKumaj+acuuWcsOadv+S4quaVsOaooeW8jyAqL1xuICAgIHJhbmRvbUluZGV4OiBudW1iZXIgPSAwO1xuICAgIC8qKuS4iuS4gOS4quWcsOadvyAqL1xuICAgIGxhc3ROb2RlOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgLyoq5LiK5LiA5Liq5Zyw5p2/IOaWueWQkeexu+WeiyovXG4gICAgbGFzdEZsb29yVHlwZSA9IEZsb29yVHlwZS5GUk9OVDtcbiAgICAvKirlkIzmlrnlkJHnsbvlnovnmoTlnLDmnb/kuKrmlbAqL1xuICAgIGZyb250TnVtYmVyOiBudW1iZXIgPSAwO1xuICAgIC8qKuenu+WKqOmAn+W6piovXG4gICAgbW92ZXNwZWVkOiBudW1iZXIgPSA1O1xuICAgIC8qKnjmlrnlkJEqL1xuICAgIG1vdmVTcGVlZHg6IG51bWJlciA9IDA7XG4gICAgLyoqeuaWueWQkSovXG4gICAgbW92ZVNwZWVkejogbnVtYmVyID0gMDtcbiAgICAvKirlvZPliY3lnLDmnb/ntKLlvJUqL1xuICAgIG5vd0Zsb29ySW5kZXg6IG51bWJlciA9IDA7XG4gICAgLyoq5pGE5YOP5py66KeS5bqmKi9cbiAgICBjYW1lcmFBbmdsZTogbnVtYmVyID0gMDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgRmxvb3JNYW5hZ2VyLkkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEZsb29yTWFuYWdlcikgYXMgRmxvb3JNYW5hZ2VyO1xuICAgIH1cbiAgICBJbml0KCkge1xuXG4gICAgICAgIC8vIHRoaXMuQ3JlYXRlRmxvb3JGb3JKc29uKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgQ3JlYXRlRmxvb3IoRmxvb3JJRDogbnVtYmVyKTogTm9kZSB8IG51bGwge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmxvb3JQcmVmYWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gKHRoaXMuZmxvb3JQcmVmYWJzW2ldLmRhdGEgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KEZsb29yKSBhcyBGbG9vcjtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LklEID09IEZsb29ySUQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmxvb3IgPSBpbnN0YW50aWF0ZSh0aGlzLmZsb29yUHJlZmFic1tpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxGbG9vcnMucHVzaChmbG9vci5nZXRDb21wb25lbnQoRmxvb3IpIGFzIEZsb29yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxvb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihcIuWIm+W7uuWcsOadv+Wksei0pSzkuI3lrZjlnKhJROS4ujpcIiwgRmxvb3JJRCwgXCLnmoTlnLDmnb8s6K+35qOA5p+l5ZCO6YeN6K+VIVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgQ3JlYXRlRmxvb3JGb3JKc29uKGpzb246IGFueSkge1xuICAgICAgICAvLyBqc29uID0gdGhpcy5kYXRhO1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uLmZsb29yRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpzb24uZmxvb3JEYXRhW2ldO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoZWxlbWVudCkgKyAxMDAwMDtcbiAgICAgICAgICAgIGxldCBmbG9vck5vZGUgPSB0aGlzLkNyZWF0ZUZsb29yKGlkKTtcbiAgICAgICAgICAgIGlmIChmbG9vck5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHRoaXMuU2V0TmV3Rmxvb3JUeXBlRGF0YShmbG9vck5vZGUsIGpzb24sIGkpO1xuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24oMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE5vZGUgPSBmbG9vck5vZGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRGbG9vck5vZGVQb3NpdGlvbih0eXBlLCBmbG9vck5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmFkZENoaWxkKGZsb29yTm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIENyZWF0ZUZsb29yRm9yUmFuZG9tKCkge1xuICAgICAgICAvLyBqc29uID0gdGhpcy5kYXRhO1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZTtcbiAgICAgICAgbGV0IGZsb29yTm9kZTtcbiAgICAgICAgbGV0IGZsb29yID0geyBmbG9vclR5cGU6IEZsb29yVHlwZS5GUk9OVCB9O1xuICAgICAgICBpZiAodGhpcy5yYW5kb21JbmRleCA8PSA1KSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcigxKSArIDEwMDAwO1xuICAgICAgICAgICAgZmxvb3JOb2RlID0gdGhpcy5DcmVhdGVGbG9vcihpZCk7XG4gICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuRlJPTlQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcigxKSArIDEwMDAwO1xuICAgICAgICAgICAgZmxvb3JOb2RlID0gdGhpcy5DcmVhdGVGbG9vcihpZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0Rmxvb3JUeXBlID09IEZsb29yVHlwZS5GUk9OVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyb250TnVtYmVyID49IDUgJiYgTWF0aC5yYW5kb20oKSA8IDAuMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb250TnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuTEVGVDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLlJJR0hUO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvbnROdW1iZXIrKztcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkZST05UO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0Rmxvb3JUeXBlID09IEZsb29yVHlwZS5MRUZUIHx8IHRoaXMubGFzdEZsb29yVHlwZSA9PSBGbG9vclR5cGUuUklHSFQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcm9udE51bWJlciA+PSA1ICYmIE1hdGgucmFuZG9tKCkgPCAwLjIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm9udE51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5GUk9OVDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb250TnVtYmVyKys7XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IHRoaXMubGFzdEZsb29yVHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmxvb3JOb2RlKSB7XG4gICAgICAgICAgICBsZXQgZiA9IGZsb29yTm9kZS5nZXRDb21wb25lbnQoRmxvb3IpIGFzIEZsb29yO1xuICAgICAgICAgICAgZi5mbG9vclR5cGUgPSBmbG9vci5mbG9vclR5cGU7XG4gICAgICAgICAgICB0aGlzLmxhc3RGbG9vclR5cGUgPSBmbG9vci5mbG9vclR5cGU7XG4gICAgICAgICAgICBpZiAodGhpcy5yYW5kb21JbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24oMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IGZsb29yTm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXRGbG9vck5vZGVQb3NpdGlvbihmbG9vci5mbG9vclR5cGUsIGZsb29yTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLmFkZENoaWxkKGZsb29yTm9kZSk7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbUluZGV4Kys7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgU2V0Rmxvb3JOb2RlUG9zaXRpb24odHlwZTogRmxvb3JUeXBlLCBmbG9vck5vZGU6IE5vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3ROb2RlKSByZXR1cm47XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuRlJPTlQ6XG4gICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24odGhpcy5sYXN0Tm9kZS53b3JsZFBvc2l0aW9uLngsIDAsIHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi56IC0gMyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5CQUNLOlxuICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi54LCAwLCB0aGlzLmxhc3ROb2RlLndvcmxkUG9zaXRpb24ueiArIDMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuTEVGVDpcbiAgICAgICAgICAgICAgICBmbG9vck5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLmxhc3ROb2RlLndvcmxkUG9zaXRpb24ueCAtIDMsIDAsIHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi56KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLlJJR0hUOlxuICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi54ICsgMywgMCwgdGhpcy5sYXN0Tm9kZS53b3JsZFBvc2l0aW9uLnopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3ROb2RlID0gZmxvb3JOb2RlO1xuICAgIH1cblxuICAgIC8qKuWIm+W7uuaXtuagueaNrmpzb27mlbDmja7orr7nva7mlrDlnLDmnb/nmoTmlrnlkJHlsZ7mgKcgKi9cbiAgICBwcml2YXRlIFNldE5ld0Zsb29yVHlwZURhdGEoZmxvb3JOb2RlOiBOb2RlLCBqc29uOiBhbnksIGk6IG51bWJlcik6IEZsb29yVHlwZSB7XG4gICAgICAgIGxldCBmbG9vciA9IGZsb29yTm9kZS5nZXRDb21wb25lbnQoRmxvb3IpIGFzIEZsb29yO1xuICAgICAgICBpZiAoZmxvb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoanNvbi5mbG9vckRpcmVjdGlvbkRhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkZST05UO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkJBQ0s7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuTEVGVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5SSUdIVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw57G75Z6LOlwiICsganNvbi5MZXZlbDEuZmxvb3JEaXJlY3Rpb25EYXRhW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZsb29yLmZsb29yVHlwZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDnsbvlnos6XCIgKyBqc29uLkxldmVsMS5mbG9vckRpcmVjdGlvbkRhdGFbaV0pXG4gICAgfVxuXG4gICAgUmVtb3ZlRmxvb3IoKSB7XG4gICAgICAgIHRoaXMuYWxsRmxvb3JzWzBdLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmFsbEZsb29ycy5zcGxpY2UoMCwgMSk7XG4gICAgfVxuXG4gICAgb25VcERhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLk1vdmVGbG9vcihkdCk7XG4gICAgfVxuXG5cblxuICAgIE1vdmVGbG9vcihkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4XSkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleF0uSXNOb3dGbG9vcigpKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJlbmRsZXNzTW9kZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm93Rmxvb3JJbmRleCA9PSA1KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZUZsb29yKCk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93Rmxvb3JJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5ub3dGbG9vckluZGV4ID4gMikge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubm93Rmxvb3JJbmRleCA9IDI7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlRmxvb3JGb3JSYW5kb20oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dGbG9vckluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5ub3dGbG9vckluZGV4ID09IDEpXG5cbiAgICAgICAgICAgIC8vIHRoaXMubm93Rmxvb3JJbmRleC0tO1xuICAgICAgICB9XG4gICAgICAgIC8v6Iul5LiL5Liq57uT54K55a2Y5ZyoIOW5tuS4lOS4juW9k+WJjee7k+eCueeahOexu+Wei+S4jeWQjFxuICAgICAgICBpZiAodGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4XSAmJiB0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXggKyAxXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubm93Rmxvb3JJbmRleCArIDEgPCB0aGlzLmFsbEZsb29ycy5sZW5ndGggJiYgdGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4ICsgMV0uZmxvb3JUeXBlICE9IHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleF0uZmxvb3JUeXBlKSB7XG4gICAgICAgICAgICAgICAgLy/lupTor6XovazlkJFcbiAgICAgICAgICAgICAgICBpZiAoVmVjMy5kaXN0YW5jZSh0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXhdLm5vZGUud29ybGRQb3NpdGlvbiwgbmV3IFZlYzMoMCwgMCwgMCkpIDwgMC4xKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4ICsgMV0uZmxvb3JUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5GUk9OVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVGcm9udCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuQkFDSzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5MRUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW92ZUxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLlJJR0hUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW92ZVN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v6L2s5pGE5YOP5aS0XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleCArIDFdLmZsb29yVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkZST05UOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUFuZ2xlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuQkFDSzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IDE4MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IDkwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IC05MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3V0ID0gbmV3IFZlYzMoMCwgMCwgMCk7XG4gICAgICAgIGxldCBhbmdsZSA9IG5ldyBWZWMzKDAsIDAsIDApO1xuICAgICAgICB0aGlzLkNhbWVyYT8uZ2V0V29ybGRSb3RhdGlvbigpLmdldEV1bGVyQW5nbGVzKGFuZ2xlKVxuICAgICAgICBWZWMzLmxlcnAob3V0LCBhbmdsZSwgbmV3IFZlYzMoMCwgdGhpcy5jYW1lcmFBbmdsZSwgMCksIDAuMSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFuZ2xlKTtcblxuICAgICAgICB0aGlzLkNhbWVyYT8uc2V0Um90YXRpb25Gcm9tRXVsZXIob3V0LngsIG91dC55LCBvdXQueik7XG4gICAgICAgIHRoaXMuUGxheWVyPy5zZXRSb3RhdGlvbkZyb21FdWxlcihvdXQueCwgb3V0LnksIG91dC56KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbEZsb29ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYWxsRmxvb3JzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5ub2RlLnNldFdvcmxkUG9zaXRpb24oZWxlbWVudC5ub2RlLndvcmxkUG9zaXRpb24ueCArICh0aGlzLm1vdmVTcGVlZHggKiB0aGlzLm1vdmVzcGVlZCAqIGR0KSwgMCwgZWxlbWVudC5ub2RlLndvcmxkUG9zaXRpb24ueiArICh0aGlzLm1vdmVTcGVlZHogKiB0aGlzLm1vdmVzcGVlZCAqIGR0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRNb3ZlKCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAwO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAxO1xuICAgIH1cblxuICAgIE1vdmVGcm9udCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR6ID0gMTtcbiAgICB9XG4gICAgTW92ZUJhY2soKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IDA7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IC0xO1xuICAgIH1cbiAgICBNb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gMTtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR6ID0gMDtcbiAgICB9XG4gICAgTW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAtMTtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR6ID0gMDtcbiAgICB9XG4gICAgTW92ZVN0b3AoKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IDA7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDA7XG4gICAgfVxufSJdfQ==